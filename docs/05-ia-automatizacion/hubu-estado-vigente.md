# HUBU — agente IA (estado vigente)

**Estado general: en ejecución / arquitectura pendiente.** No es una implementación final cerrada.

## Objetivo

Agente de IA para atención automatizada e información institucional (servicios, horarios, sedes, Plan Dover, hospitalización, UCI, certificados, urgencias, Pet Center).

## Base de conocimiento

Construida a partir de:
- documentación de servicios, horarios, sedes y procesos;
- 25 categorías de conocimiento (sedes, urgencias, consulta general/especializada, cirugías, vacunación, laboratorio, hospitalización, UCI, imágenes diagnósticas, planes preventivos, Pet Center, escalamiento a asesor, entre otras);
- **100 conversaciones anonimizadas extraídas de Kommo**, depuradas (corrección ortográfica, limpieza, homologación de horarios/sedes, eliminación de información sensible) y estructuradas como dataset de entrenamiento.

## Pruebas realizadas

Preguntas de prueba formuladas sobre: servicios, horarios, sedes, Plan Dover, hospitalización, UCI, certificados, urgencias y Pet Center.

## Riesgo de arquitectura con QVET

En agosto surgió un riesgo real: QVET y HUBU pueden requerir WhatsApp API y potencialmente competir por la misma línea institucional.

**Decisión vigente (13/08/2026):**
- No conectar HUBU a la línea institucional de WhatsApp hasta contar con validación técnica formal.
- Separar funciones mientras se define arquitectura final:
  - **QVET:** recordatorios, citas, firma digital y comunicación clínica.
  - **HUBU:** agente IA, captación e información automatizada.
  - **Call center:** mantener líneas actuales hasta definir arquitectura final.

## Pendientes

- Ampliar el dataset más allá de las 100 conversaciones iniciales.
- Homologar información institucional.
- Validar respuestas.
- Definir arquitectura de WhatsApp (convivencia con QVET).
- Definir criterio de escalamiento a humano.
- Documentar SOP.
- Ejecutar pruebas controladas.

## Fuente

`docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`, sección 9.
