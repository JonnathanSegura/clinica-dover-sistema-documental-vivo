# CRM — Kommo (estado vigente)

## De HubSpot (previsto) a Kommo (operado)

La documentación inicial de mayo de 2026 (ver `docs/historico/2026-05-kickoff/04-hubspot-crm-pipeline/`) contempló **HubSpot** como CRM central de referencia. Esa fue la arquitectura *propuesta*, nunca la implementada. El análisis operativo posterior se concentró en **Kommo**, que era el sistema efectivamente disponible para leads y WhatsApp. Esta página documenta el estado real.

## Estado y decisión clave

**Kommo quedó pausado como sistema principal de captación** — no falló como herramienta; lo que falla es adopción, actualización y disciplina de seguimiento por parte del equipo comercial. Decisión vigente: no cambiar de CRM antes de terminar el diagnóstico, y priorizar auditoría antes de nueva implementación.

## Hallazgos de la auditoría

- Plan Avanzado, 1 licencia.
- Baja adopción por parte del equipo comercial (falta de capacitación y desorden documentados como causa).
- Solo una de las tres líneas comerciales estaba integrada con WhatsApp Business al momento del diagnóstico.
- Prueba controlada de WhatsApp→Kommo: lead ingresó correctamente al CRM (confirmando que la integración técnica funciona; el problema es de proceso, no de plataforma).
- Fuga estimada: solo ~27 % de las conversaciones de WhatsApp quedaban registradas en CRM al corte medido — pendiente de resolver.

## Reutilización como fuente para IA

Se documentaron **100 conversaciones anonimizadas de Kommo**, consolidadas en 25 categorías, como primer dataset estructurado para entrenar a HUBU (ver `docs/05-ia-automatizacion/`). Este es actualmente el uso más valioso y activo de Kommo dentro del proyecto: no como sistema de captación en vivo, sino como fuente de conocimiento para el agente IA.

## Pendientes

- Definir rol futuro de Kommo (retomar como CRM principal vs. mantenerlo solo como fuente de dataset).
- Ampliar el dataset de conversaciones más allá de las 100 iniciales.
- Resolver la fuga WhatsApp → CRM si se decide retomarlo como sistema principal.
- Mejorar disciplina de registro comercial para poder calcular tasa de cierre y ROAS real por canal.

## Fuente

`docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`, secciones 2.4 y 7 (Kommo), y sección 24 (KPIs de CRM).
