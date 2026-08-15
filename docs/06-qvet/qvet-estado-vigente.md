# QVET (estado vigente)

**Estimación técnica global documentada: 75–80 %.** Esto no equivale a despliegue organizacional completo — falta estandarización, capacitación y piloto real.

## Dos frentes de trabajo

### 1. Firma digital QVET

| Componente | Avance | Situación |
|---|---|---|
| Firma digital QVET (general) | 80–85 % | Configurada, comprendida y probada |
| Plantillas/documentos | 70–80 % | Falta depuración y estandarización |
| Firma desde tablet | 85–90 % | Flujo demostrado y probado |
| Firma mediante enlace | 85–90 % | Probada |
| Firma por email/WhatsApp | 70–80 % | Depende de configuración operativa |

**Flujo de trabajo confirmado:** Documentos → Plantillas → Cliente/Mascota → Nueva plantilla. Las plantillas Word admiten campos combinables (propietario, mascota, teléfono, datos clínicos, médico, firma).

**Flujo recomendado de edición:** Visita → "+" → plantilla → abrir en Word → completar → guardar → cerrar → esperar sincronización → seleccionar documento → Firma → método de firma. Si se genera el PDF definitivo demasiado pronto, la edición posterior queda limitada.

**Trazabilidad confirmada:** un documento firmado no puede eliminarse, queda asociado al cliente/mascota, puede vincularse a la visita, y conserva trazabilidad legal.

Las plantillas antiguas pueden eliminarse y reemplazarse (confirmado con QVET) — pendiente inventariar, depurar y cargar versiones oficiales.

### 2. WhatsApp API + QVET

| Componente | Avance | Situación |
|---|---|---|
| WhatsApp API + QVET | 80–85 % | Línea institucional migrada/vinculada y probada |
| Recordatorios de citas | 70 % | Ajustes de mensajes pendientes |
| Gestión de conversaciones | 80 % | Demostrada para múltiples usuarios simultáneos |
| Reprogramación automática por IA | Pendiente | Función futura, no implementada |
| Integración IA QVET | Pendiente | Anunciada para versión posterior |

**Importante:** una línea vinculada a la arquitectura API de QVET no debe registrarse simultáneamente en WhatsApp Business tradicional — genera conflicto.

## Convivencia QVET–HUBU

Riesgo de arquitectura identificado en agosto: ambos sistemas pueden requerir la misma línea de WhatsApp API. Decisión vigente: separar funciones (QVET = citas/firma/comunicación clínica; HUBU = agente IA de captación e información) hasta definir arquitectura definitiva. Ver `docs/05-ia-automatizacion/hubu-estado-vigente.md`.

## Pendientes priorizados

1. Definir arquitectura definitiva QVET–HUBU–WhatsApp–call center.
2. Ejecutar piloto controlado con casos reales.
3. Depurar y aprobar plantillas oficiales.
4. Definir responsables de generación, revisión, envío y firma de documentos.
5. Formalizar procedimiento de call center para WhatsApp QVET.
6. Completar capacitación de usuarios.
7. Crear SOP interno.

## Fuente

`docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`, sección 10.
