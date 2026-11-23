# CRM — Kommo (estado vigente, corte 09/11/2026)

## De HubSpot (previsto) a Kommo (operado)

La documentación inicial de mayo de 2026 (ver `docs/historico/2026-05-kickoff/04-hubspot-crm-pipeline/`) contempló **HubSpot** como CRM central de referencia. Esa fue la arquitectura *propuesta*, nunca la implementada. El CRM efectivamente auditado y operado desde entonces es **Kommo**.

## Evolución del rol de Kommo

| Etapa | Qué pasó |
|---|---|
| Mayo–agosto | Auditoría inicial: baja adopción, una sola línea comercial integrada, prueba controlada WhatsApp→Kommo exitosa. Se decide **pausarlo** como sistema principal y usar sus conversaciones como dataset de IA. |
| 13/10 | Nueva auditoría completa (solo lectura): el problema sigue siendo de proceso, no de plataforma. Hallazgos: embudo mezclando categorías con avance, miles de solicitudes sin clasificar en la bandeja, casi ningún lead con fuente, sede y servicio, sin tareas de seguimiento, un solo usuario y créditos de IA sin usar. |
| 16–23/10 | **Reactivación como sistema de medición.** WhatsApp del call center conectado en modo coexistencia (el equipo sigue usando la app), sin bots, mensajes automáticos ni agente de IA sobre ese número al inicio. Embudo nuevo "Dover - Atención" de 5 etapas de proceso (Nuevo, En conversación, Cita agendada, Cita completada, Perdido); servicio y canal pasan a campos y etiquetas. |
| 26/10 | Informe de funcionamiento: 441 leads; de los 197 creados desde el 23/10, **0 sin etiqueta de origen**; la regla automática Nuevo→En conversación movió 95 leads. |
| 29/10 | **Unificación de embudos:** "Dover - Atención" queda como embudo principal (535 leads activos) y el viejo como archivo histórico (con etiquetas HIST-*), sin tocar los chats pendientes de la bandeja. |
| 9/11 | Decisión: el call center diligencia **directamente en Kommo** (un lead por cita) en lugar de la tabla aparte. |

## Diseño vigente

- **Etapas** = avance del proceso. **Servicio, sede y canal** = campos y etiquetas (no etapas).
- **Etiquetas de origen únicas y autoexplicativas:** Google por campaña (urgencias, laboratorio, sitio), Meta por red (Facebook / Instagram), TikTok y directo. Asignadas por un Salesbot silencioso que solo etiqueta.
- **Regla automática** Nuevo → En conversación cuando hay mensaje saliente visto (limitación conocida: Kommo no ofrece disparador de "enviado").
- **Cruce con el call center** (valor de factura y estado de cada lead) por teléfono de 10 dígitos, con corrida nocturna a las 22:00 (hora Bogotá); código y reglas en `scripts/`. Solo avanza etapas, nunca retrocede, y no pisa precios existentes.
- **Línea de WhatsApp de recordatorios y campañas (QVET)** separada: no se conecta a Kommo para no dañar esa integración.
- **Gobierno:** un solo administrador de configuración; el equipo comercial gestiona datos de leads sin configurar; privacidad alineada con la Política de Tratamiento de Datos v2.

## Hallazgos a vigilar (informe del 26/10)

- Un grupo de leads históricos solo con la etiqueta de Google (sin campaña), anteriores a la taxonomía.
- Algunos leads que retroceden de En conversación a Nuevo (probable cliente que vuelve a escribir); ensucia la métrica de tiempo en etapa.
- Leads con cita aún en Nuevo: la regla por "visto" no cubre todo; depende del cruce nocturno.
- Respuesta tardía en leads de fin de semana (ver `docs/02-marketing-digital/google-ads-sep-nov-2026.md`).

## Pendientes

- Consolidar el diligenciamiento directo del call center en Kommo y definir el control de comisiones por venta ganada.
- Pedir una columna con el ID del lead (o diligenciamiento directo) para reforzar la llave de cruce.
- KPIs semanales: leads por día y origen, % con etiqueta (meta 100 %), % Nuevo→En conversación en menos de 1 h, leads en Nuevo con más de 14 días, ganados por origen, CPL por campaña.
- Reconectar la Tienda de Mascotas a Kommo (entra después del call center; hoy opera con la app suelta).

## Actualización del 10 al 23 de noviembre de 2026

- **13/11 — nuevo horario del call center:** pasa a **una sola asesora, lunes a sábado de 7:00 a. m. a 4:00 p. m.** (antes dos asesoras hasta las 8:00 p. m.). El bot y el agente de IA atienden las 24 horas, los 7 días. El Salesbot "Urgencias sin asesora" queda en horario permanente (desaparece el hueco de 23:30 a 24:00 y la dependencia de cargar festivos a mano).
- **13/11 — urgencias como primer filtro y sin médico a domicilio:** ante una urgencia, bot y agente envían de inmediato la dirección de Santa Bárbara; si la persona insiste, se aclara el horario de la asesora y se comparte el WhatsApp solo si el mensaje llegó por otro canal. Dover no ofrece médico a domicilio (solo domicilio de productos); se eliminó esa opción del menú.
- **13/11 — retiro de médicos** que pasaron a la sede de la alianza de menús, fuentes del agente y lista del campo "Especialista"; Chicó ya no tiene lista de médicos en el bot.
- **13/11 — piloto de bot y agente de IA en Instagram y Facebook** (ver `docs/05-ia-automatizacion/agente-ia-kommo-redes-sociales.md`). Desde el 20/11 queda solo el agente.
- **17–20/11 — cargas 1 a 10:** reglas de respuesta validadas por el call center, etiquetas (`META-VALORACION`, `G-DEMANDGEN`, traspaso), calendario de festivos 2026–2027, menú de tres botones y bienvenida corta, rama para anuncios y recordatorio a los 10 minutos.
- **Base de preguntas frecuentes de chats reales:** se leyeron 829 chats del WhatsApp del call center (el universo disponible desde el 20/10 quedó agotado) y se consolidó una lista final de preguntas para mercadeo y call center. Las respuestas validadas se cargan por lotes (primer lote el 19/11). Hallazgo: preguntas de precio de exámenes, profilaxis y esterilización recibían solo saludo; falta un guion de lista de precios validada.
- **Leads de Urgencias:** al 13/11, 20 leads etiquetados `G-URGENCIAS` desde el 3/11 (100 % con origen trazado) y **ninguno en cita o paciente** porque el call center aún no movía etapas en Kommo; al 17/11 eran 33. Cuatro de cada cinco llegaban fuera del horario de la asesora.
- **Leads de la campaña de Meta "Valoración":** se estancaron tras el mensaje del bot que pedía datos; prioridad de seguimiento humano.

**Plan y costos:** una licencia del plan Pro; los créditos de IA incluidos se reinician cada mes y no se acumulan. Gerencia autorizó un paquete adicional para el piloto (ver documento del piloto).

**Pendientes nuevos:** definir quién revisa los chats escalados al abrir turno, unificar bots que puedan bloquear al agente y consolidar el diligenciamiento directo del call center.

## Fuente

Auditoría de Kommo (13/10/2026), informe de funcionamiento (26/10/2026), registros de ejecución del 16 al 29/10 y decisión del 9/11/2026, del Sistema Documental Vivo; para lo anterior, `docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`, secciones 2.4 y 7.
