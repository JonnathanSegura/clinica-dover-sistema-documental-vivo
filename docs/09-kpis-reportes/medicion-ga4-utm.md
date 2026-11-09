# Medición: GA4, eventos clave y estándar de UTM

**Problema de origen:** hasta septiembre el sitio generaba tráfico pero no se podía probar cuántos contactos aportaban el SEO, las redes y las campañas. Un primer corte de GA4 del 21/09/2026 (90 días) registró **0 conversiones todos los días**, incluso en los de mayor tráfico orgánico: no había eventos clave configurados.

## Qué se implementó (5/11/2026)

| Cambio | Detalle |
|---|---|
| Evento clave `contact_link_click` | Lo emite el plugin de Google al hacer clic en enlaces de contacto; verificado en vivo con clic a WhatsApp (`link_type=whatsapp`), `tel:` (`phone`) y `mailto:` (`email`) |
| Evento clave `form_submit` | Envío de formularios del sitio |
| Dimensión personalizada "Tipo de enlace de contacto" | Parámetro `link_type`; separa WhatsApp de otros contactos en informes |
| Etiqueta `como_llegar_click` en Google Tag Manager | Mide clics en enlaces de "cómo llegar" (Google Maps), que no generan evento por defecto; no modifica etiquetas existentes. Pendiente de verificar en tiempo real |
| Vinculación GA4 ↔ Google Ads | Creada con etiquetado automático; habilita que los eventos clave alimenten la atribución |
| Search Console ↔ GA4 | Vinculación identificada como acción de minutos el 21/09 |

## Límites que hay que conocer

- Los eventos clave **no son retroactivos**: cuentan desde su activación.
- Cada clic cuenta, no cada persona (posible doble conteo).
- **Medir clic no es medir cita:** el cierre se verifica en Kommo.
- Los enlaces a WhatsApp no conservan UTM; para saber qué red originó un chat se usa el texto prellenado del mensaje y las etiquetas de origen en Kommo.
- El contenedor de Tag Manager ya tenía etiquetas de conversión de Google Ads (WhatsApp, llamada, formulario, compra); son independientes de los eventos clave de GA4. Verificar que realmente se disparen es el pendiente principal de Google Ads (ver `docs/02-marketing-digital/google-ads-sep-nov-2026.md`).

## Estándar de UTM por red social y canal (v1.0, 5/11/2026)

Reglas: todo en minúsculas, sin tildes ni espacios; cinco parámetros fijos; un enlace por combinación; nunca usar UTM en enlaces internos del propio sitio (reinician la sesión y rompen la atribución); en chats de WhatsApp compartir siempre la URL limpia.

| Parámetro | Valores permitidos |
|---|---|
| `utm_source` | `instagram`, `facebook`, `tiktok`, `linkedin`, `linktree`, `gbp`, `whatsapp_difusion`, `correo` |
| `utm_medium` | `social` (orgánico), `paid_social` (anuncios de Meta), `referral` (Linktree, perfil de Google), `email` |
| `utm_campaign` | `aamm_tema` (año-mes y pilar), por ejemplo `2611_urgencias`, `2611_perfil`, `2611_reconocimiento` |
| `utm_content` | formato o ubicación: `bio`, `reel`, `carrusel`, `historia`, `video`, `boton_sede_sb`, `anuncio_<nombre>` |
| `utm_term` | no se usa |

Google Ads no lleva UTM manual: usa etiquetado automático. Por qué `social` y `paid_social`: son los valores que GA4 agrupa como "Social orgánico" y "Social de pago"; con otros valores el tráfico cae en "Sin asignar".

**Estado de aplicación:** estándar redactado, pendiente de aprobación y de aplicación (no se ha modificado ningún enlace público todavía); orden propuesto: anuncios de Meta, Linktree, perfiles de Google, biografías. Revisión el 19/11 de que las sesiones se agrupen correctamente.

## Cadena de trazabilidad objetivo

campaña o publicación (UTM / etiqueta automática) → clic en el sitio (evento clave) → mensaje de WhatsApp con texto de origen → lead en Kommo con etiquetas de origen y campaña → cita y venta cargadas por el call center (cruce nocturno, ver `scripts/`) → costo por paciente.

El eslabón que aún falta cerrar es el de los clics a WhatsApp y llamadas que no llegan como conversión a Google Ads.

## Fuente

Registros de ejecución de GA4 y estándar de UTM (5/11/2026) y primer corte de datos de GA4 (21/09/2026), del Sistema Documental Vivo.
