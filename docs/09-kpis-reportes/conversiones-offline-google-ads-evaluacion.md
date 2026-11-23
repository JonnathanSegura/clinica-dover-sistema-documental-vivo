# Devolver ventas de Kommo a Google Ads (conversiones offline) — evaluación del 10/11/2026

**Estado:** evaluación técnica hecha; nada se instaló ni se envió a la cuenta publicitaria. Todas las pruebas se hicieron en un entorno aislado con datos ficticios.

## Hallazgo que cambió el plan

El plan inicial usaba las bibliotecas de la **API de Google Ads**. Desde el **15/06/2026**, la importación de conversiones offline y las conversiones mejoradas para clientes potenciales pasaron a la **Data Manager API** y se bloquean en la anterior (salvo tokens antiguos con permiso). Google recomienda además empezar por conversiones mejoradas para clientes potenciales (teléfono o correo con hash) en lugar de depender solo del identificador de clic (GCLID).

## Repositorios evaluados

| Candidato | Veredicto |
|---|---|
| Muestras oficiales de la Data Manager API (Python, licencia Apache-2.0) | **Usar con ajustes**: es la base correcta |
| Proyecto de ejemplo para capturar el GCLID en clics a WhatsApp | **Tomar la idea, no usar tal cual** (no es oficial, dependencias de 2024, exige la API de WhatsApp en la nube y despliegue en Google Cloud) |
| Bibliotecas de la API de Google Ads para subida de clics offline | **Descartar** para este uso (bloqueada) |

## Pruebas del candidato elegido

- Instalación limpia correcta y 31 de 31 pruebas automáticas del repositorio aprobadas.
- Solicitud de ingesta con un evento ficticio serializada sin error; existe modo de solo validación.
- **Riesgo 1:** los teléfonos locales de 10 dígitos y los internacionales con +57 producen hashes distintos; hay que normalizar al formato internacional antes de enviar.
- **Riesgo 2:** un texto basura también se convierte en hash sin error; hace falta validación propia porque la tabla del call center tiene teléfonos mal escritos.

## El bloqueo real: el GCLID se pierde en WhatsApp

Cuando alguien entra al chat desde el anuncio o el sitio, el identificador de clic se pierde si no se pasa. Para cerrar el ciclo hace falta capturarlo en el sitio, incluir un código corto en el mensaje precargado, guardar la relación código ↔ clic, llevar ese código al lead en Kommo y subir la venta (valor, fecha, factura) dentro de los 90 días del clic. Alternativa o complemento: conversiones mejoradas con el teléfono con hash.

## Riesgos

- Llamadas y formularios no pasan por WhatsApp y quedarían sin cubrir.
- La mitad de las ventas de Google de octubre no tenía teléfono en la tabla del call center y no se podría devolver.
- Se envían datos personales con hash: alinear con la Política de Tratamiento de Datos v2.
- Todo cambio en la cuenta de Google Ads requiere autorización de gerencia.

## Próximos pasos

1. Confirmar quién controla el webhook de la línea del call center y si se puede capturar un código en el primer mensaje.
2. Crear (con autorización) la acción de conversión de importación.
3. Prototipo mínimo en entorno de prueba: leer ventas con teléfono válido, normalizar a +57 y validar sin registrar datos.
4. Exigir teléfono de 10 dígitos e ID del lead de Kommo en la tabla del call center (el 17/11 se pidió ampliar la hoja con columnas de teléfono, ID y tipo).

## KPI de éxito

Porcentaje de ventas de Google con identificador enviable (> 80 %), conversiones registradas en Google frente a leads en Kommo, ventas devueltas y aceptadas y costo por venta por campaña.

## Fuente

Evaluación del 10/11/2026 del Sistema Documental Vivo y documentación oficial de Google Ads y de la Data Manager API.
