# Scripts — automatización del cruce Call center ↔ Kommo

Código real usado en el proyecto, **sin credenciales ni identificadores de la cuenta** (se leen de variables de entorno o de propiedades del script; ver `docs/10-procedimientos/seguridad-documental.md`).

| Archivo | Qué hace | Dónde corre |
|---|---|---|
| `kommo_cruce_nocturno.gs` | Lee la hoja del call center (estado del lead y valor de factura), cruza por teléfono con los leads de Kommo y mueve la etapa / carga el precio. Registra todo en una hoja `Log_Cruce`. | Google Apps Script, disparador diario a las 22:00 (hora Bogotá) |
| `kommo_sync_callcenter.py` | Misma lógica en Python a partir de un CSV exportado. Útil para simular o auditar fuera de Google Sheets. | Local / servidor |

## Problema que resuelve

El call center responde por WhatsApp desde la app y registra sus resultados en una tabla de leads. Kommo no veía esos resultados, así que no se podía medir qué campaña produjo citas ni ventas. Solicitar doble digitación habría entorpecido al equipo, por eso el cruce se hace desde marketing, en una hoja aparte, sin modificar la tabla del call center.

## Diseño (decisiones que importan)

1. **Simulación primero.** El modo por defecto no escribe nada; se revisa el log y solo entonces se pasa a `APLICAR`.
2. **Solo hacia adelante.** Un lead puede avanzar (Nuevo → En conversación → Cita agendada → Ganado / Perdido), nunca retroceder.
3. **No pisa datos.** El precio solo se escribe si hoy es 0.
4. **Llave de cruce = teléfono de 10 dígitos.** Por eso se pidió al call center anotar siempre el teléfono del paciente.
5. **Trazabilidad.** Cada cambio queda con fecha, lead, últimos dígitos del teléfono, cambio y modo.

## Lecciones documentadas (octubre 2026)

- La primera simulación propuso 90 cambios, entre ellos atribuciones dudosas: la hoja trae meses anteriores y un cliente recurrente podía asignar una venta antigua a un lead nuevo. Se añadió una **regla de fecha** (una fila cuenta solo si su fecha es ≥ a la creación del lead menos un día), y la segunda simulación bajó a 51 cambios (50 avances de etapa y 1 ganado), eliminando unas 39 atribuciones dudosas.
- Un error de selección en el editor ejecutó una vez la función en modo `APLICAR` en vez de instalar el disparador. El resultado coincidía con la simulación, pero quedó como práctica: **verificar el nombre de la función antes de pulsar Ejecutar**.
- El token de larga duración lo crea y pega el responsable; no se registra en ningún documento.

## Pendiente conocido

- Pedir al call center una columna "ID del lead en Kommo" para reemplazar o reforzar la llave por teléfono.
- Desde el 9/11/2026 el call center diligencia directamente en Kommo (un lead por cita); cuando eso se consolide, este cruce pasa a ser verificación y no fuente de datos.
