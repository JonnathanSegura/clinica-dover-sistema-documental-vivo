/**
 * Cruce nocturno: hoja del call center -> etapas y precio en Kommo (embudo "Dover - Atención").
 * Se instala en una hoja de MARKETING aparte, nunca en la hoja del call center.
 *
 * Propiedades del script (Configuración del proyecto > Propiedades del script):
 *   KOMMO_SUBDOMAIN   = <subdominio de la cuenta Kommo>
 *   KOMMO_TOKEN       = <token de larga duración; solo lo escribe el responsable, nunca se versiona>
 *   KOMMO_PIPELINE_ID = <id numérico del embudo principal>
 *   TAB_NAME          = nombre de la pestaña que trae el mes del call center
 *   MODO              = SIMULACION (por defecto) | APLICAR
 *
 * Uso: ejecutar cruceNocturno() a mano en SIMULACION, revisar la pestaña "Log_Cruce",
 * y solo después cambiar MODO a APLICAR y ejecutar instalarDisparador().
 *
 * Reglas de seguridad del diseño:
 *  - Solo mueve leads hacia adelante en el embudo, nunca hacia atrás.
 *  - Solo escribe el precio si hoy es 0 (no pisa valores cargados).
 *  - La llave de cruce es el teléfono normalizado a 10 dígitos.
 *  - Todo cambio queda registrado en la hoja "Log_Cruce" (fecha, lead, teléfono, cambio, modo).
 *
 * Nota: la versión en producción agrega (a) una regla de fecha —una fila del call center solo
 * cuenta si su fecha es >= a la creación del lead menos 1 día, para no atribuir ventas de clientes
 * recurrentes a leads nuevos— y (b) reintentos ante errores transitorios de red. Esta copia es la
 * versión base documentada el 23/10/2026.
 */
var MAPA = { 'venta': 'ganado', 'venta sin cobro': 'ganado', 'no asiste': 'perdido',
             'negociacion': 'conv', 'negociación': 'conv' };
var ORDEN = ['nuevo', 'conv', 'agendada', 'ganado', 'perdido'];

function P_(k, d) { return PropertiesService.getScriptProperties().getProperty(k) || d; }

function kommo_(method, path, query, body) {
  var url = 'https://' + P_('KOMMO_SUBDOMAIN') + '.kommo.com/api/v4' + path;
  if (query) url += '?' + Object.keys(query).map(function (k) { return k + '=' + encodeURIComponent(query[k]); }).join('&');
  var opt = { method: method, muteHttpExceptions: true, headers: { Authorization: 'Bearer ' + P_('KOMMO_TOKEN') } };
  if (body) { opt.contentType = 'application/json'; opt.payload = JSON.stringify(body); }
  var r = UrlFetchApp.fetch(url, opt), c = r.getResponseCode();
  if (c === 204) return {};
  if (c >= 300) throw new Error('Kommo ' + c + ' ' + path + ' ' + r.getContentText().slice(0, 200));
  return JSON.parse(r.getContentText());
}

function tel_(v) { var d = String(v || '').replace(/\D/g, ''); return d.length >= 10 ? d.slice(-10) : ''; }
function valor_(v) { var d = String(v || '').replace(/[^\d]/g, ''); return d ? parseInt(d, 10) : 0; }

function etapas_() {
  var out = {};
  kommo_('GET', '/leads/pipelines/' + P_('KOMMO_PIPELINE_ID') + '/statuses')._embedded.statuses.forEach(function (s) {
    var n = s.name.toLowerCase();
    if (n === 'nuevo') out.nuevo = s.id;
    else if (n.indexOf('en conversaci') === 0) out.conv = s.id;
    else if (n.indexOf('cita agendada') === 0) out.agendada = s.id;
    else if (n.indexOf('cita completada') === 0) out.ganado = s.id;
    else if (n === 'perdido' || n.indexOf('cita cancelada') === 0) out.perdido = s.id;
  });
  return out;
}

function cruceNocturno() {
  var simular = P_('MODO', 'SIMULACION') !== 'APLICAR';
  var ids = etapas_(), inv = {};
  Object.keys(ids).forEach(function (k) { inv[ids[k]] = k; });

  // 1) hoja -> por teléfono: etapa más avanzada y valor de factura más alto
  var sh = SpreadsheetApp.getActive().getSheetByName(P_('TAB_NAME'));
  var datos = sh.getDataRange().getValues();
  var h = datos[0].map(function (x) { return String(x).toLowerCase().trim(); });
  var iT = h.indexOf('telefono'), iE = h.indexOf('estado del lead'), iV = h.indexOf('valor factura');
  if (iT < 0 || iE < 0) throw new Error('No encuentro columnas Telefono / Estado del Lead');
  var obj = {};
  datos.slice(1).forEach(function (r) {
    var p = tel_(r[iT]), t = MAPA[String(r[iE]).toLowerCase().trim()];
    if (!p || !t) return;
    var o = obj[p] || (obj[p] = { t: t, v: 0 });
    if (ORDEN.indexOf(t) > ORDEN.indexOf(o.t)) o.t = t;
    if (iV >= 0) o.v = Math.max(o.v, valor_(r[iV]));
  });

  // 2) leads del embudo y sus teléfonos
  var leads = [], page = 1, d;
  do {
    d = kommo_('GET', '/leads', { 'filter[pipeline_id]': P_('KOMMO_PIPELINE_ID'), limit: 250, page: page++, 'with': 'contacts' });
    var got = (d._embedded && d._embedded.leads) || [];
    leads = leads.concat(got);
  } while (got.length === 250);
  var porContacto = {}, cids = [];
  leads.forEach(function (l) {
    ((l._embedded && l._embedded.contacts) || []).forEach(function (c) {
      if (!porContacto[c.id]) { porContacto[c.id] = []; cids.push(c.id); }
      porContacto[c.id].push(l);
    });
  });
  var porTel = {};
  for (var i = 0; i < cids.length; i += 50) {
    var q = { limit: 250 };
    cids.slice(i, i + 50).forEach(function (c, j) { q['filter[id][' + j + ']'] = c; });
    var cd = kommo_('GET', '/contacts', q);
    ((cd._embedded && cd._embedded.contacts) || []).forEach(function (c) {
      (c.custom_fields_values || []).forEach(function (f) {
        if (f.field_code === 'PHONE') f.values.forEach(function (v) {
          var n = tel_(v.value); if (n) (porTel[n] = porTel[n] || []).push(c.id);
        });
      });
    });
  }

  // 3) decidir (solo hacia adelante; precio solo si hoy es 0)
  var cambios = {}, log = [];
  Object.keys(obj).forEach(function (p) {
    (porTel[p] || []).forEach(function (cid) {
      (porContacto[cid] || []).forEach(function (l) {
        var actual = inv[l.status_id] || 'otro';
        if (ORDEN.indexOf(actual) < 0 || !ids[obj[p].t]) return;
        var c = cambios[l.id] || { id: l.id };
        var nota = [];
        if (ORDEN.indexOf(obj[p].t) > ORDEN.indexOf(actual)) { c.status_id = ids[obj[p].t]; nota.push(actual + '->' + obj[p].t); }
        if (obj[p].v > 0 && !l.price) { c.price = obj[p].v; nota.push('precio ' + obj[p].v); }
        if (nota.length) { cambios[l.id] = c; log.push([new Date(), l.id, p, nota.join(' | '), simular ? 'SIMULADO' : 'APLICADO']); }
      });
    });
  });
  var lista = Object.keys(cambios).map(function (k) { return cambios[k]; });
  if (!simular) for (var j = 0; j < lista.length; j += 50) kommo_('PATCH', '/leads', null, lista.slice(j, j + 50));

  var lg = SpreadsheetApp.getActive().getSheetByName('Log_Cruce') || SpreadsheetApp.getActive().insertSheet('Log_Cruce');
  if (lg.getLastRow() === 0) lg.appendRow(['Fecha', 'Lead', 'Telefono', 'Cambio', 'Modo']);
  if (!log.length) log.push([new Date(), '', '', 'sin cambios', simular ? 'SIMULADO' : 'APLICADO']);
  lg.getRange(lg.getLastRow() + 1, 1, log.length, 5).setValues(log);
}

function instalarDisparador() {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'cruceNocturno') ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('cruceNocturno').timeBased().everyDays(1).atHour(22).inTimezone('America/Bogota').create();
}
