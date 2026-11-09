# Dataset de conversaciones de WhatsApp para entrenar al agente

Dos fuentes, ambas **anonimizadas** antes de usarse (ver reglas en `docs/10-procedimientos/seguridad-documental.md`): no se conservan nombres de clientes ni de asesores, teléfonos, cédulas ni datos clínicos de pacientes.

## Fuente 1 — Kommo (junio–julio 2026)

- 100 conversaciones, depuradas (ortografía, homologación de horarios y sedes, eliminación de datos sensibles).
- Estructuradas en 25 categorías de conocimiento: sedes, urgencias, consulta general y especializada, cirugías, vacunación, laboratorio, hospitalización, UCI, imágenes diagnósticas, planes preventivos, Pet Center y escalamiento a asesor, entre otras.
- Cubre sobre todo el flujo de **citas, planes preventivos y especialistas**.

## Fuente 2 — WhatsApp de la línea Pet Center (ampliación del 2/10/2026)

| Dato | Valor |
|---|---|
| Conversaciones analizadas | 35 |
| Mensajes totales | 12.438 (≈ 5.945 del equipo y ≈ 6.493 de clientes) |
| Cobertura temporal | marzo de 2020 a octubre de 2026 (mayor densidad julio–septiembre de 2026) |
| Antigüedad | 18 de 35 conversaciones tienen más de dos años y siguen activas |

**Hallazgo principal:** el volumen más pesado y repetitivo no está en las citas sino en la **farmacia magistral, la venta de productos y los domicilios**, atendido 100 % por personas y sin ninguna automatización. Una parte importante del tráfico futuro será de clientes recurrentes (pacientes crónicos con compra mensual), no de primer contacto.

### Intenciones detectadas (agrupadas)

- **Magistrales:** cotizar uno nuevo (requiere fórmula legible), recomprar, estado de preparación, cambio de precio, demora del laboratorio.
- **Producto convencional:** precio y disponibilidad de alimento o medicamento de marca, agotados y pedido por encargo, descuentos, puntos de fidelización.
- **Domicilios:** costo, confirmación de dirección y datos de facturación, horario de ruta, reclamo por entrega, recoger en sede.
- **Pagos:** medios disponibles, comprobante, saldo a favor.
- **Programas comerciales:** descuentos del plan de salud, nombres antiguos del plan que el cliente aún usa, puntos acumulados.
- **Atención general:** saludo inicial con consentimiento de datos, a quién llamar para citas y urgencias, horarios.

### Flujo operativo real (end to end)

Apertura con bienvenida automática y aviso de datos → identificación de la necesidad → (magistral) foto de fórmula legible → cotización con laboratorio externo → confirmación de precio → **pago anticipado obligatorio** → espera de 2 a 3 días hábiles → aviso de llegada → entrega por recogida o domicilio → cierre → reinicio del ciclo meses después.

### Reglas de negocio que el agente debe respetar

- Magistrales: fórmula legible, cotización por laboratorio (precio variable), pago 100 % anticipado, 2 a 3 días hábiles; si cambia la concentración o el laboratorio se recotiza.
- Los descuentos del plan cubren medicamento y producto, no las fórmulas magistrales.
- Domicilio: costo variable por zona, rutas por franja con hora de corte, dependencia de una plataforma externa de mensajería; requiere dirección completa y cédula para facturar.
- Horario del mostrador distinto al de la clínica (la clínica es 24/7; el mostrador y el chat humano no).
- El medio de pago puede cambiar temporalmente por incidentes externos y el agente debe poder comunicarlo.

### Riesgos operativos detectados en el dato

Alta rotación de personal sin guion único de apertura; cuatro formas distintas de presentar la marca; dependencia de un laboratorio externo y de una plataforma de mensajería sin SLA visible para el cliente; nombres de plan antiguos que conviven con el vigente; fricciones manuales en el programa de puntos.

## Cómo se usó

Con estas dos fuentes se redactó la base de conocimiento del agente (ver `agente-pet-center-produccion.md`). Recomendaciones aplicadas o en curso: unificar la plantilla de apertura y de pago recibido, distinguir magistral de convencional desde el primer mensaje, reconocer los nombres antiguos del plan como sinónimos, y dejar fuera del alcance del agente el agendamiento de citas y las urgencias (se remiten al canal humano y a la sede 24 h).

## Fuente

Base documental de entrenamiento IA para la línea Pet Center (2/10/2026) y dataset de Kommo (jun–jul 2026), del Sistema Documental Vivo.
