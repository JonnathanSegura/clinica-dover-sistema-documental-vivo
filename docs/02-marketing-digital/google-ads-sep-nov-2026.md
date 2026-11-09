# Google Ads — septiembre a noviembre de 2026

**Regla de esta página:** cada cifra se conserva dentro de su corte temporal exacto (ver `google-ads-urgencias.md` para junio–julio). Todo cambio de configuración en las campañas se registra el mismo día, y los topes de presupuesto los define la gerencia.

## Línea de decisiones

| Fecha | Decisión / hecho | Motivo |
|---|---|---|
| 21/09 | Se eliminan reglas automáticas de presupuesto de la cuenta y se pausan palabras clave de Urgencias tras revisión profunda de grupos de anuncios | Hallazgo de reglas automáticas de presupuesto activas en la cuenta |
| 30/09 | Audiencia Customer Match con leads inactivos y clientes (reactivación) | Aprovechar la base propia; antes se redactó la Política de Tratamiento de Datos v2 para cubrir el vacío de consentimiento |
| 13/10 | Se lanza Demand Gen "Laboratorio" con landing que termina en clic a WhatsApp (sin formulario) | No hay personal para devolver llamadas a leads de formulario |
| 22/10 | Todo mensaje o lead, pago u orgánico, aterriza en el WhatsApp del call center (Kommo), salvo la Tienda de Mascotas | Un solo canal medible; se retira el formulario de leads de Urgencias |
| 26/10 | Reactivación de 3 palabras clave amplias de Urgencias con tope de COP 30.000/día durante 7 días, juzgadas por leads en Kommo | Probar demanda real con riesgo acotado |
| 3/11 | Se pausa la campaña Search "Urgencias 24H" vigente y se publica una campaña nueva (v2) | La v1 llevaba tiempo en déficit: 836 clics y COP 918.137 de gasto para 1 lead entre el 5/10 y el 3/11 |
| 5/11 | Se pausa Demand Gen Laboratorio y el crédito promocional restante se usa en una campaña Demand Gen de Reconocimiento con videos de marca (71 años, 3 sedes) | El bono vence el 27/11; el objetivo es reconocimiento, no venta directa |

## Campaña Search "Urgencias 24H Santa Bárbara v2" (3 al 8 de noviembre, 6 días)

Diseño: llamadas y WhatsApp al canal del call center, radio de 12 km alrededor de la sede, sin landing nueva (usa la página de urgencias del sitio). Cambios uno a la vez, con lectura previa en la cuenta.

| Métrica | Valor |
|---|---|
| Impresiones / clics / CTR | 2.419 / 227 / 9,4 % |
| CPC medio / costo | COP 825 / COP 187.273 (≈ COP 31.200/día: gasta todo el presupuesto) |
| Conversiones registradas en Google | **0** |
| Dispositivos | ≈ 95 % de las impresiones en móvil |
| Leads en Kommo con etiqueta de la campaña (hasta el 9/11) | 12 de la v2 (7 "tengo una urgencia", 5 "quiero más información"), 100 % con trazabilidad |
| Clic-a-lead (aprox.) | 5,3 % |
| Costo por lead (aprox.) | ≈ COP 15.600 |

Criterio de cierre fijado el 3/11: ≥ 30 impresiones/día y ≥ 3 leads en 10 días. Al día 7 se cumple volumen y leads; **falta demostrar calidad (pacientes) y medición**.

### Lectura crítica

1. **Medición ciega (alto):** Google registra 227 clics y 0 conversiones mientras Kommo tiene 12 leads. Ningún clic a WhatsApp ni llamada llega como conversión, así que la puja no tiene señal y optimiza por clics. Sin resolverlo no se puede pasar a maximizar conversiones ni subir presupuesto.
2. **Respuesta humana tardía en fines de semana (alto):** dos leads de "más información" esperaron 12 y 36 h; el Salesbot solo atiende palabras de urgencia.
3. **Texto del lead:** 5 de 12 llegan con "quiero más información" en vez del mensaje de urgencia; probablemente un botón del sitio hereda la marca de la campaña.
4. **Tráfico de baja intención o lejano:** 381 términos de búsqueda, solo 10 revisados; competidores y zonas lejanas aparecen con impresiones.
5. **Leads no son pacientes:** sin cruce con call center no hay costo por paciente.

### Lo que sí funciona

Entrega estable y barata, etiquetado de origen al 100 %, y el Salesbot de fin de semana verificado en vivo con dos casos de urgencia (responde con la dirección de la sede 24 h y etiqueta el lead).

## Demand Gen Laboratorio (13/10 al 5/11)

Landing de Laboratorio en Santa Bárbara con clic a WhatsApp, presupuesto de COP 60.000/día y fecha de fin al 26/11 por vencimiento del bono. Pausada el 5/11 por decisión de reasignar el crédito a Reconocimiento.

## Principios de trabajo en esta cuenta

- Verificar en vivo en la cuenta en el momento de decidir; no presentar datos de días anteriores como actuales.
- Antes de proponer un cambio, revisar en la documentación qué se hizo, por qué y qué se revirtió.
- El Plan Dover (por instrucción de gerencia) y las especialidades que pasaron a la sede de la alianza quedan fuera de la pauta.
- Un solo KPI de negocio (consultas o citas atribuibles frente a costo) en lugar de "conversiones" de Google.

## Pendientes

Resolver el registro de conversiones de WhatsApp y llamadas (ver `docs/09-kpis-reportes/medicion-ga4-utm.md`), cruzar los leads con call center para contar pacientes, decidir respuesta automática para mensajes no urgentes en fin de semana, y revisar los 381 términos de búsqueda antes de añadir negativas. Revisión del día 10 de la campaña: 13/11.

## Fuente

Informe de rendimiento de Urgencias v2 (9/11/2026) y registros de ejecución de septiembre a noviembre del Sistema Documental Vivo.
