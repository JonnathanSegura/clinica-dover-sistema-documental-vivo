# HUBU — agente IA (estado vigente, corte 09/11/2026)

**Estado general:** el agente de la **Tienda de Mascotas** está **en producción desde el 5/11/2026** (ver `agente-pet-center-produccion.md`). El agente de la línea institucional de la clínica **no está conectado**: sigue condicionado a la validación de arquitectura con QVET.

## Objetivo

Agente de IA para atención automatizada e información institucional, con alcance limitado y traspaso a personas con etiqueta de motivo.

## Base de conocimiento

- 25 categorías de conocimiento construidas a partir de documentación de servicios, horarios, sedes y procesos.
- **100 conversaciones anonimizadas de Kommo** (citas, planes y especialistas) y **35 conversaciones de la línea de la tienda** (12.438 mensajes; magistrales, productos y domicilios). Ver `dataset-whatsapp-pet-center.md`.

## Líneas de WhatsApp y límites

| Línea | Uso | Agente |
|---|---|---|
| Call center | Citas y atención general; conectada a Kommo en coexistencia | Sin bots ni agente de IA al inicio |
| Tienda de Mascotas | Magistrales, productos y domicilios | **Agente en producción (franjas sin atención humana)** |
| QVET (API) | Recordatorios, citas y campañas masivas | No se conecta a Kommo ni al agente hasta validación técnica formal |

**Decisión vigente (13/08/2026):** no conectar HUBU a la línea institucional de WhatsApp hasta contar con validación técnica formal, para evitar conflicto de arquitectura API con QVET.

## Gobierno del agente

- La conexión a producción requiere autorización explícita del responsable.
- Alcance por reglas de oro; una sola regla de urgencias (remitir a la sede con atención 24 h, nunca un teléfono).
- **Todo cambio de reglas se prueba en borrador antes de publicar** (aprendizaje del 9/11).
- Revisión diaria de 15 minutos durante dos semanas y lectura de conversaciones reales cada semana.

## Pendientes

Ver `docs/11-bitacora/pendientes-actuales.md` (sección del agente). Además: ampliar el dataset, homologar información institucional y documentar el SOP del agente.

## Fuente

Informes de funcionamiento y de ajustes (9/11/2026) y `docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`, sección 9.
