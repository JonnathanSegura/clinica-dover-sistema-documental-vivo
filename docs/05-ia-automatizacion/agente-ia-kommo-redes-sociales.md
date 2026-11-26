# Agente de IA de Kommo en Instagram y Facebook — piloto (13 al 23 de noviembre de 2026)

**Estado: piloto activo solo en mensajes directos de Instagram y Facebook/Messenger.** El WhatsApp del call center **no** está incluido; su activación quedó aplazada el 20/11. Último corte de revisión: 23/11/2026.

## Qué es y por qué existe

Las redes sociales no tenían una persona asignada para responder y el call center pasó el 13/11 a **una sola asesora de lunes a sábado, de 7:00 a. m. a 4:00 p. m.** El agente de IA de Kommo (distinto del agente HUBU de la Tienda de Mascotas, ver `agente-pet-center-produccion.md`) atiende las redes las 24 horas como piloto, antes de decidir si se abre en el WhatsApp del call center.

Alcance deliberadamente acotado: solo Kommo; HUBU y la Tienda de Mascotas no se tocan.

## Línea de tiempo

| Fecha | Hito |
|---|---|
| 13/11 | Se activan bot comercial y agente de IA en Instagram y Facebook. Horario de la asesora cambia a L–S 7:00–16:00; bot y agente cubren 24/7. Urgencias pasa a ser primer filtro automático |
| 13/11 | Se retiran de menús y fuentes los médicos que pasaron a la sede de la alianza; se elimina la opción "médico a domicilio" (Dover no ofrece ese servicio) |
| 17–18/11 | Cargas 1 a 8: reglas de respuesta, acción de agendar cita para urgencias, precios validados, calendario de festivos 2026–2027, frase única de traspaso y etiquetas |
| 18/11 | Incidente: el agente respondió en inglés a la reacción de un cliente a una historia. Corregido (idioma fijado en español y regla para emojis y reacciones) |
| 18/11 | Gerencia autoriza la compra de créditos de IA para el piloto (pago pendiente de ejecutar) |
| 19/11 | Carga 9: rama para quien llega desde un anuncio y recordatorio a los 10 minutos |
| 20/11 | Carga 10: bienvenida corta con tres botones (urgencia, cita, pregunta); se descubre que el bot bloquea al agente; **se apaga el bot v2 y queda solo el agente** |
| 20/11 | Hallazgo de transferencia silenciosa al pedir hablar con un médico; el piloto en el WhatsApp del call center se aplaza |
| 23/11 | Primera revisión semanal con conversaciones reales (20 al 23/11) |
| 23/11 | Carga 11: correcciones derivadas de la revisión (ver sección siguiente) |

## Hallazgos técnicos que cambiaron el diseño

1. **Un solo bot por conversación.** Cuando el bot v2 abría la conversación, el agente de IA nunca se activaba en ella, aunque el flujo del bot ya hubiera terminado. Efecto: clientes con preguntas libres sin respuesta. Evidencia: el agente sí contestaba en conversaciones anteriores al bot y cuando el bot estaba fuera de horario. Decisión del 20/11: quitar el disparador del bot v2 (queda como respaldo) y dejar solo al agente.
2. **Límites de Meta para los textos.** Un mensaje con botones se corta cerca de los 80 caracteres; el botón admite 20 y máximo 3 por mensaje. La bienvenida original quedaba cortada y los botones sin pregunta. Se auditaron 136 mensajes del bot: 22 se partieron en dos (información + pregunta corta con botones). Regla permanente en `docs/10-procedimientos/reglas-textos-bot-y-agente.md`.
3. **Reacciones a historias** y mensajes de solo emoji recibían el menú. Se agregó una regla de "mensajes que no se responden" (emoji, reacción, mención de historia, agradecimiento o despedida, respuestas automáticas de otros negocios).
4. **Transferencia silenciosa.** Cuando el cliente pide hablar con un médico o una persona, el agente transfiere el chat sin enviar ningún mensaje y consume créditos. No hay opción para apagarlo en los ajustes; se mitigó con una regla validada por la asesora y queda como pendiente un aviso automático al transferir.
5. **Límite de 300 caracteres por pauta** del agente; con más, el guardado falla. Las fuentes de conocimiento y las pautas se mantienen cortas y sin contradicciones.

## Costos y control de créditos

- Plan Pro de Kommo con una licencia; los créditos de IA incluidos se reinician cada mes y no se acumulan. Cada respuesta del agente consume aproximadamente 15 créditos, así que los créditos incluidos alcanzan para unas 150 respuestas al mes.
- Gerencia autorizó (18/11) un paquete adicional de 10.000 créditos para el piloto; el descuento por respuesta que declara Kommo para ese complemento **no está medido en esta cuenta**.
- Si los créditos se agotan, el agente deja de responder y el cliente queda sin respuesta. Las pruebas en vista previa también consumen créditos: se limitan.

## Resultados del primer corte (20 al 23/11)

Base pequeña: 4 clientes reales por mensaje directo en 3 días; las conclusiones son preliminares.

- **Funciona:** responde en segundos y a cualquier hora, en español y con tono cálido; respeta las reglas cargadas (precio de la valoración, consulta virtual solo tras valoración presencial, horario de la asesora); no contesta comentarios ni agradecimientos; reconoce el error cuando el cliente se queja de repetición.
- **Falla o es mejorable:** repite el mismo precio y enlace varias veces; no cierra la cita (solo reenvía el enlace del WhatsApp); deriva consultas de productos y de vacantes al número de la asesora en lugar del canal correcto; envía un seguimiento a los 15 minutos tras un agradecimiento; afirmó un dato no validado sobre consulta a domicilio; sigue la transferencia silenciosa.
- **Créditos:** unas 43 respuestas en el periodo, incluidas pruebas, equivalentes a unos 650 créditos (el saldo real se verifica en Kommo).

## Carga 11 (23/11): correcciones tras la primera revisión

| Hallazgo | Cambio |
|---|---|
| Repetición de precio, enlace y datos ya dados | Pauta "no repites lo ya dicho" |
| Productos enviados al número de la asesora | El agente remite a las líneas de cada Tienda de Mascotas (Santa Bárbara y Chicó); probado en vista previa |
| Vacantes enviadas a la asesora | Se remite al canal de Recursos Humanos de Dover |
| Gasto de créditos y respuestas largas | Longitud de respuesta "corta" (2 a 3 frases, un solo siguiente paso) y se elimina la acción de seguimiento a los 15 minutos |
| Dato "no hay consulta a domicilio" | Confirmado por gerencia: Dover no ofrece consulta veterinaria a domicilio; solo la Tienda de Mascotas entrega productos |
| Transferencia silenciosa | **Causa hallada:** faltaba el mensaje opcional de la acción de transferir a un usuario. Se creó la acción con aviso al cliente (canal de la asesora, horario y "te contactará cuando inicie su jornada"). Corrige la hipótesis de que era un comportamiento nativo |
| No cierra la cita | Pauta de cierre: ante un "sí", envía un enlace de WhatsApp con el texto precargado (servicio y mascota reales). Límite: el cliente debe enviar el mensaje; el agente no agenda ni confirma disponibilidad y no recoge datos personales |

Dato obsoleto detectado: una línea de Chicó que ya no pertenece a Dover; la vigente es la de la Tienda de Mascotas de Chicó. Solo persistía en la base de conocimiento interna del call center, por corregir.

Riesgos: tras transferir, el agente queda fuera de la conversación hasta que se marque resuelta (confirmar con prueba real); verificar que la asesora reciba la notificación; las respuestas cortas pueden perder detalle; el agente gasta créditos aun cuando decide no responder un agradecimiento.

## KPIs del piloto

| KPI | Meta |
|---|---|
| Mensajes de clientes sin respuesta | 0 |
| Repeticiones por conversación | 0 |
| Urgencias derivadas a Santa Bárbara sin insistir | 100 % |
| % de conversaciones que llegan al WhatsApp de la asesora | Medir y bajar |
| Créditos por conversación | Medir |
| Mensajes en idioma incorrecto | 0 |
| Transferencias silenciosas por semana | 0 |

## Criterio para abrir el WhatsApp del call center

Una a dos semanas de piloto sin errores graves en urgencias y revisión de conversaciones contra la base de conocimiento y los horarios. Decide el responsable del proyecto con visto bueno de gerencia.

## Pendientes

- Probar en chats reales el aviso de transferencia (pedir hablar con un médico) y la notificación a la asesora; probar el cierre de cita con enlace precargado.
- Decidir si se restauran las acciones eliminadas ("cliente frustrado", "quiere comprar").
- Pagar el paquete de créditos autorizado y decidir sobre el bot "Urgencias sin asesora" (podría bloquear al agente).
- Decisión legal de gerencia sobre la autorización de datos (hoy la pide el agente al tomar datos para una cita).
- Seguir cargando respuestas validadas del call center (lote 1 del 19/11 y siguientes).
- Revisión semanal fija; la siguiente, el viernes 27/11 (incluye créditos).

## Actualización 24–26/11/2026: agente apagado y bot v3

- **25/11:** por el congelamiento del pago de créditos (decisión de dirección administrativa) el agente se desactivó y el "Bot comercial v3 (copia corregida)" responde los mensajes directos de Instagram y Facebook (no WhatsApp). El v2 queda intacto de respaldo; un bot en la conversación bloquea al agente, por eso al aprobar créditos se apaga el v3 y se reactiva el agente.
- **Contenido del v3:** horario nuevo de la asesora, "Tienda de Mascotas" en vez de nombres antiguos, regla de urgencias por turno, horarios de visita a hospitalizados y un submenú de preguntas (citas y visita, pagos y precios, exámenes y cirugía) con respuestas tomadas del entrenamiento del agente y de las respuestas validadas del call center. Respeta los límites de Meta. Límite: solo entiende botones, no texto libre.
- **Auditoría cruzada 24/11:** el agente de Kommo carece de pauta de quejas; en Kommo quedaban dos fuentes con horario viejo; criterio único de "nuestra asesora" frente a "asesora humana" pendiente.
- **Regla de urgencias:** en el turno de la asesora se dirige a su línea; fuera de turno, a la recepción de Santa Bárbara (atención todo el día). Aplica solo a urgencias.
- **Alternativa en evaluación (26/11):** asistente con la API de Claude. En 20 preguntas de la batería, el modelo mayor cumplió todas las reglas y el menor tuvo fallas menores; el costo calculado es muy inferior al del agente actual, pero no está medido y falta verificar la llamada externa desde Kommo, el silencio cuando atiende la asesora y la autorización de gerencia por el uso de datos.
- **Pendiente:** disparador del v3 por horario, prueba con chats reales y primer día de lanzamientos como KPI.
## Fuente

Registros de ejecución de Kommo (cargas 1 a 10), hallazgos y decisiones del 17 al 20/11/2026, y revisión del piloto del 20 al 23/11/2026, del Sistema Documental Vivo.
