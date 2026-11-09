# Decisiones estratégicas

| # | Decisión | Motivo | Impacto | Estado |
|---|---|---|---|---|
| 1 | Priorizar auditoría antes de implementación | Evitar construir sobre procesos desordenados | Enfoque de todo el proyecto en diagnóstico antes de ejecución | Aplicada |
| 2 | No cambiar de CRM antes de terminar el diagnóstico de Kommo | El problema detectado era de adopción/proceso, no de plataforma | Kommo se mantuvo pausado como sistema principal mientras se definía su rol | Superada en octubre por la decisión #9 |
| 3 | Priorizar Sede Santa Bárbara en campañas y en todo trabajo nuevo | Sede Chicó estaba en proceso de salida de Dover | Ningún documento, campaña o flujo nuevo debía referenciar Chicó | Reemplazada el 27/10/2026 (ver decisión #13) |
| 4 | No escalar Genesys en fase inicial | Prioridad en captación, CRM y urgencias con mejor relación impacto/esfuerzo | Contact center avanzado queda en Nivel 3 (puede esperar) | Vigente |
| 5 | No priorizar Nakura frente a CRM y captación | Mismo criterio de impacto/esfuerzo | Nakura queda en nivel medio de prioridad | Vigente |
| 6 | Construir el Sistema Documental Vivo | Evitar pérdida de información dispersa entre chats, documentos y plataformas | Origen de este repositorio y del histórico maestro | Vigente / en evolución continua |
| 7 | No conectar HUBU a la línea institucional de WhatsApp hasta validación técnica formal | Riesgo de conflicto de arquitectura API con QVET sobre la misma línea | QVET y HUBU operan con funciones separadas mientras se define arquitectura | Vigente desde 13/08/2026 |
| 8 | Cambio de línea comercial: urgencias de Google Ads pasa a Comercial 1; Comercial 3 queda orientado a Pet Center | Reorganización de responsabilidades comerciales por canal | Redistribución de cargas de seguimiento | Aplicada (finales de mayo 2026) |
| 9 | Retomar Kommo como sistema de medición: un embudo nuevo de 5 etapas ("Dover - Atención"), WhatsApp del call center en modo coexistencia y, al inicio, sin bots ni mensajes automáticos sobre ese número | La plataforma sí funciona; faltaba proceso y trazabilidad de origen | Kommo pasa de dataset a sistema de medición; etiquetas únicas por origen (Google por campaña, Meta por red, TikTok, directo) | Aplicada 16–23/10/2026 |
| 10 | Medir ventas cruzando la tabla del call center con Kommo desde marketing, sin modificar la tabla ni duplicar trabajo | No entorpecer al call center; necesidad de costo por paciente | Cruce nocturno por teléfono (ver `scripts/`) | Aplicada 26/10/2026 |
| 11 | Unificar el embudo viejo y "Dover - Atención" en un solo embudo principal | Doble gestión y mensajes en dos lugares | "Dover - Atención" principal; el viejo queda como archivo histórico | Aplicada 29/10/2026 (en observación 7 días) |
| 12 | Pasar el diligenciamiento del call center directamente a Kommo (un lead por cita) | Eliminar la doble gestión con la tabla y poner a prueba el CRM | Requiere cubrir el control de comisiones desde Kommo | Decidida 09/11/2026 |
| 13 | Reemplazar la directiva de "solo Santa Bárbara" por una directiva de tres sedes con enfoque propio | La gerencia confirmó que Chicó sigue abierta y se suma la sede de la alianza | Ver `docs/00-gobierno/directiva-sedes.md` | Vigente desde 27/10/2026 |
| 14 | Neurología y oncología solo se nombran en relación con la sede de la alianza | Exclusividad contractual de la alianza | Se ajustaron sitio y pauta | Vigente desde 27/10/2026 |
| 15 | Una campaña nueva de Urgencias en Google en lugar de seguir con la vigente | La campaña vigente acumulaba gasto sin retorno medible | Campaña v2 publicada con llamadas y WhatsApp, radio de 12 km | Aplicada 03/11/2026 |
| 16 | Usar el crédito promocional restante de Google en una campaña de Reconocimiento de marca | El bono vence el 27/11 y el objetivo es reconocimiento | Se pausa Demand Gen de Laboratorio | Aplicada 05/11/2026 |
| 17 | Lanzar el agente de IA de la Tienda de Mascotas en las franjas sin atención humana | Respuesta fuera de horario, con alcance limitado y traspaso con etiqueta | Agente en producción desde el 05/11 | Aplicada 05/11/2026 |
| 18 | Nada de reglas del agente en producción sin prueba previa en borrador | Un cambio de reglas tuvo un efecto no previsto el 09/11 | Procedimiento de cambio del agente | Vigente desde 09/11/2026 |
| 19 | Un solo estándar visual de botones del sitio (amarillo con letras azules, hover invertido) y verificación obligatoria en escritorio y móvil | Coherencia de marca y la mayoría de visitantes entra por celular | Regla CSS global en el sitio | Aplicada 06/11/2026 |

## Nota sobre nombres

Los nombres del equipo comercial se anonimizan en este repositorio público (ver `docs/10-procedimientos/seguridad-documental.md`).

## Fuente

`docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`, sección 27 (decisiones 1–8) y registros de ejecución de octubre–noviembre de 2026 (decisiones 9–19).
