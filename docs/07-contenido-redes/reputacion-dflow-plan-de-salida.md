# Reputación digital — dflow Reputation: arquitectura y plan de salida (20/11/2026)

## Contexto

La gestión de reseñas de Google se apoya en una herramienta de IA de terceros contratada con pago mensual **hasta finales de diciembre de 2026**. Después de esa fecha Dover no tendrá la plataforma. Objetivo: documentar qué hace bien, exportar los datos y replicar lo valioso con herramientas propias (Google Business Profile, Kommo, hojas de cálculo, scripts y Claude).

## Qué hace la plataforma (y vale la pena replicar)

1. **Bandeja única** con estado de respuesta y filtro "necesita respuesta".
2. **Reglas por estrellas con aprobación:** 4–5★ responde automáticamente tras una espera; 1–3★ solo genera borrador que aprueba una persona. Es la pieza más valiosa.
3. **Respuestas con tono de marca** y líneas por tema (precio, espera, queja grave).
4. **Panel con metas y pronóstico** (reseñas por mes, tasa de respuesta, calificación objetivo).
5. **Análisis de IA por categorías** (sentimiento, fortalezas, debilidades, seguimiento de acciones).
6. **Métricas del Perfil de Empresa** (impresiones, llamadas, direcciones, términos de búsqueda: marca vs. descubrimiento).
7. **Reporte semanal automático** por correo.
8. **Calendario de publicaciones** con aprobación humana.
9. **Widget y QR** para convertir visitas en reseñas.
10. **Conector de IA (MCP)** para que Claude lea reseñas y métricas en vivo con permisos revocables.

## Lo observado (al 20/11)

- Calificación de Chicó 4,5★ con tasa de respuesta de alrededor del 99 % y ritmo de reseñas por debajo del objetivo mensual.
- Santa Bárbara concentra un backlog antiguo de reseñas sin respuesta (2018–2023, sobre todo Facebook) y un grupo de reseñas negativas históricas.
- Las métricas de crecimiento de la ficha ("+100 %") parecen un artefacto sin base de comparación: no usarlas como crecimiento.
- Los QR casi no se han usado; falta ubicarlos y promoverlos.
- Publicaciones de la ficha abandonadas: el modo automático de borradores está desactivado.

## Limitaciones y riesgos

- No puede publicar respuestas en Facebook (se responden a mano).
- Estados inconsistentes entre la herramienta y Google: siempre verificar en Google Business Profile.
- **Filtros por calificación ("detener comentario negativo", enrutamiento por estrellas):** Google los prohíbe (*review gating*). **No replicar y no usar**; revisar con jurídico.
- La ficha de la Tienda de Mascotas de Santa Bárbara no está conectada y se gestiona directo en Google.
- Dependencia de un tercero: sin exportación se pierden bandeja, reglas e historial.

## Plan de réplica sin la plataforma

| Capacidad | Cómo replicarla |
|---|---|
| Bandeja y estado | Google Business Profile + hoja "Registro de reseñas" (fecha, sede, estrellas, tema, estado, responsable) con revisión semanal fija |
| Respuestas por estrellas | Banco de plantillas por estrellas y tema; 4–5★ se responden directo, 1–3★ y casos delicados pasan por aprobación |
| Alertas | Notificaciones de Google Business Profile al correo del área; evaluar su API |
| Insights | Análisis trimestral con Claude sobre la exportación |
| Panel y metas | Hoja o dashboard con calificación, reseñas por mes, tasa de respuesta |
| Solicitudes de reseña | Enlace corto o QR de Google enviado por WhatsApp/Kommo tras la cita, **sin filtrar por calificación**, con base de clientes con consentimiento |
| Widget | Plugin de reseñas de Google en WordPress |
| Publicaciones | Calendario editorial semanal por sede desde Google Business Profile |
| Reporte semanal | Resumen generado con Claude desde la hoja |

## Plan de salida (antes de fin de diciembre)

1. Exportar las reseñas de ambas sedes (la exportación ya se hizo el 20/11 y está en el registro interno).
2. Guardar textos de reglas, tonos, respuestas tipo e informes de IA.
3. Probar el conector de IA en modo lectura y decidir si aporta valor frente a la exportación.
4. Pedir al proveedor la exportación completa y confirmar qué pasa con los datos tras la baja.
5. Implementar la hoja y el flujo semanal en paralelo durante diciembre.
6. Decidir con gerencia renovar o cambiar de plataforma usando este documento como criterio.

## Regla de gestión semanal

4–5★: responder directo. 1–3★ y casos delicados (muerte de mascota, acusaciones, temas legales): borrador y aprobación del responsable del proyecto. Decir "Tienda de Mascotas", no "Pet Center". Escalar los casos graves según el protocolo interno de reseñas.

## KPIs

| KPI | Meta |
|---|---|
| Tasa de respuesta de reseñas | ≥ 90 % |
| Primera respuesta a reseñas de 4–5★ | ≤ 24 h |
| Reseñas nuevas por sede | 4 al mes |
| Calificación promedio | 4,6 |
| Publicaciones en la ficha | 1 por semana por sede |

## Auditoría del 25/11/2026

- Reseñas nuevas atendidas por las tres reglas automáticas; tasas de respuesta de 96,8 % (Santa Bárbara) y 99,1 % (Chicó), sobre la meta de 90 %.
- Ritmo de reseñas nuevas muy por debajo de la meta (4 y 1 en 30 días); publicaciones de Google detenidas desde el 29/10.
- Backlog de 51 sin responder, casi todo de 2018 a 2023; las negativas antiguas no se reviven y las 5 estrellas antiguas de Facebook se responden a mano.
- Dos borradores esperan aprobación (verificar en Google antes de aprobar para no duplicar) y un caso sigue en gerencia y jurídico.
- Quedan cinco semanas para exportar los Insights y replicar el flujo.
## Fuente

Manual de la plataforma y auditorías semanales del 18 y 20/11/2026 del Sistema Documental Vivo. Los nombres de autores de reseñas se omiten en este repositorio público.
