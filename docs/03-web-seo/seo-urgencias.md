# SEO — Urgencias Veterinarias 24/7 (página Medical Center, post 3092)

## Auditoría del 22/07/2026 — hallazgos

- Contenido original: ~380 palabras, sin H1 correcto, sin FAQs, con schema de negocio básico.
- **44 imágenes en la página, 39 sin atributo ALT** — problema serio.
- Comparado contra competidores directos (Clínica Protectora de Animales, Movet, Normandía, GB Hospital Veterinario, Petplus, Clínica RAZA, Central de Urgencias Veterinarias, Animals Health Center): Dover partía por debajo en extensión de contenido y estructura de FAQs frente a varios de ellos.

## Prioridades ordenadas (impacto alto)

1. Reescribir H1 con keyword exacta — 1h, dificultad baja.
2. Publicar contenido nuevo de ~3.000 palabras con H2/H3 y FAQs — 1-2 semanas, dificultad media.
3. ALT descriptivo en las 39 imágenes sin atributo — 3-4h, dificultad baja.
4. **Unificar los 2 perfiles de Google Business Profile** — 1-2 semanas, dificultad media-alta. Mayor palanca para búsquedas locales de urgencias.
5. Implementar schema FAQPage — 2-3h, dificultad baja-media.
6. Imagen Open Graph mínimo 1200×630px — 1h, dificultad baja.
7. Mejorar LCP móvil (3,3s en jul. 2026, objetivo <2,5s) — 1 semana, dificultad media-alta.

**Impacto medio:** enlaces internos contextuales, páginas de urgencias por zona/localidad, 1-2 videos cortos, CTAs con lenguaje de urgencia real, testimonios/reseñas reales.

**Impacto bajo:** reducir plugins que afectan el puntaje de Buenas Prácticas (77/100 al momento de la auditoría), subtítulos si se agregan videos, limpiar enlaces externos irrelevantes.

## Ejecución — sesión 22/07/2026

El cliente confirmó iniciar por H1 y contenido nuevo de la página de Urgencias. Acuerdo de trabajo vigente: **no publicar cambios sin verificar datos reales**; preguntar antes de asumir o inventar cualquier dato (sedes, teléfonos, horarios, precios).

**Bloqueo técnico encontrado:** el editor de Elementor para la página Medical Center (post=3092) se quedó colgado indefinidamente en "Cargando" (reproducido en 2 intentos, más de 40 segundos de espera). Hallazgo relacionado: errores de permisos de escritura en `/wp-content/ai1wm-backups/` (backups fallidos), posible causa conectada. Decisión pendiente del cliente entre: (1) modo seguro de Elementor para diagnosticar, (2) editor estándar de WordPress sin Elementor, o (3) pausar hasta revisión de desarrollador — mientras el contenido ya redactado queda listo para implementar.

## Publicación real (29/07/2026)

El bloque SEO se publicó: ~1.360 palabras, H1 "Urgencias Veterinarias 24 Horas en Bogotá | Clínica Dover", schema FAQPage (8 preguntas), CTAs a (601) 516-9500 y Maps. Contenedor Elementor `38624de`.

## Ejecución técnica — sesión 14/08/2026 (Fase 0 de higiene técnica)

Verificado en producción:

| # | Cambio | Verificación |
|---|---|---|
| 1 | 301 de `/home/` hacia `/` | Resuelve con el título correcto |
| 2 | `noindex` en `/muchas-gracias/` | Confirmado sin afectar la home |
| 3 | Regla `/nuestras-sedes/` → `/medical-center/` desactivada (no borrada) | `/nuestras-sedes/` ahora carga la página real de sedes en vez de una cadena rota hacia la home |
| 4 | 13 URLs excluidas del sitemap de Yoast (login, home, gracias, duplicados de formulario, carrito, checkout, mi cuenta, etc.) | `page-sitemap.xml` pasó de 29 a 16 URLs, verificado por dos rutas independientes |

## Checklist de ejecución (estado)

- [x] Contenido de ~1.360 palabras publicado con schema FAQPage (nota: por debajo de la meta de ~3.000 palabras)
- [x] H1 reescrito con keyword principal
- [ ] 39 imágenes con ALT descriptivo — no verificado en sesión de agosto, sigue pendiente
- [ ] Imagen Open Graph mínimo 1200×630px
- [ ] LCP móvil por debajo de 2,5s (línea base 3,3s en jul. 2026)
- [ ] Perfiles de Google Business Profile unificados o diferenciados — **mayor prioridad pendiente**
- [ ] Páginas locales por zona
- [ ] Checkpoint de posiciones SERP a 60 y 90 días
- [x] Redirecciones 301 y limpieza de sitemap (Fase 0, 14/08)
- [ ] Problema de carga de Elementor resuelto — pendiente de decisión del cliente

## Brecha de medición crítica (identificada 14/08)

Hoy no es posible atribuir un lead de WhatsApp a la página específica desde la que salió. Sin parámetros UTM por página ni un campo en Kommo que capture ese origen, cualquier plan de expansión SEO será inmedible. Debe resolverse en Fase 0, no al cierre del trimestre.

## Fuente

`Auditoría y Estrategia SEO - Clínica Dover - Urgencias Veterinarias.docx` (22/07/2026), `claude_Mapa_Arquitectura_SEO_Servicios_Clinicos_Dover.md` (14/08/2026), y `docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`.
