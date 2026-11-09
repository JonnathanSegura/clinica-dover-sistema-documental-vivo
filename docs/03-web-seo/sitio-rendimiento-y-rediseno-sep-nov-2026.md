# Sitio dover.com.co — SEO, rendimiento y rediseño (septiembre a noviembre de 2026)

**Regla de esta página:** cada cifra con su fecha de corte. Complementa `seo-urgencias.md` (corte de agosto).

## 1. SEO: lo que dicen los datos reales

Hasta agosto las decisiones de SEO se tomaban sin datos de tráfico. En septiembre se conectaron GA4 y Search Console (vía un conector de datos) y se extrajeron cortes propios.

| Hallazgo | Dato | Corte |
|---|---|---|
| Tráfico orgánico creciente, coincidente con la limpieza técnica | De 20–40 sesiones/día (fin de junio) a 40–85 (mediados de septiembre) | GA4, 21/09 |
| Visibilidad casi solo de marca | 92 % de las impresiones son no-marca; CTR de marca ≈ 18,5 % frente a ≈ 0,27 % en no-marca | Search Console 90 días, 24/09 |
| Cluster de urgencias / 24 horas / "cerca de mí" | 11.513 impresiones y 40 clics, posición promedio 8–9 | Search Console 90 días, 25/09 |
| Sitio en general (28 días frente a los 28 anteriores) | Clics 1.140 (+14 %), CTR 1,9 %, posición media 8,5 (antes 9,4) | Search Console, 5/10 |
| Búsquedas de urgencias sin marca | ≈ 5.940 impresiones, 25 clics, CTR 0,42 %, posición ≈ 7,7 | Search Console 28 días, 5/10 |

**Lectura:** hay visibilidad en primera página pero casi nadie hace clic: el problema es de snippet y de que el mapa y los anuncios ocupan la parte alta, no de ranking puro. La demanda de urgencias se captura casi toda por pauta; si se apaga la pauta, el tráfico de urgencias cae casi a cero. El SEO no canibaliza a la pauta, pero tampoco la sustituye.

**Canibalización detectada (24/09):** para "oncología veterinaria" Google posicionaba un artículo de blog de 2023 (35 clics, posición 9,3) y no la página de servicio (3 impresiones). El blog no enlazaba a la página de servicio; se ajustó el enlazado interno. (Desde el 27/10 la oncología y la neurología se nombran solo en relación con la sede de la alianza; ver `docs/00-gobierno/directiva-sedes.md`.)

**Páginas de especialidad:** existían y recibían tráfico en volúmenes bajos (decenas de sesiones en 90 días); la conclusión fue "las páginas no posicionan", no "faltan páginas".

## 2. Rendimiento

| Fecha | Hecho |
|---|---|
| 3–4/09 | Limpieza de plugins: mejora de velocidad de ≈ 30 % |
| 21/09 | Causa raíz del LCP; carga global de scripts de WooCommerce en páginas que no son tienda; se documenta un incidente con una prueba de limpieza de scripts aplicada a todo el sitio y su reversión |
| 5/10 | Medición en vivo sin caché: TTFB 4,8–5,8 s; LCP de campo 3,7 s al 21/09 (meta < 2,5 s) |
| 16/10 | Regla permanente: ninguna imagen subida al sitio pesa más de 5 MB |
| 6/11 | Diagnóstico comparado con dos competidores: la home de Dover pesaba 370 KB con 2,0 s al primer byte, frente a 73 KB y 0,56 s de uno y 127 KB y 0,75 s del otro; en medición propia, ≈ 940 KB de HTML, 96 scripts, 60 hojas de estilo y ≈ 250 solicitudes |
| 6/11 | Fase 0 de línea base (solo lectura) y precalentamiento de caché ejecutados |

**Plan por fases (primero medir, luego cambiar):** 0 línea base sin sesión; 1 caché de página y objeto, compresión, CDN y revisión de hosting (meta TTFB < 0,8 s); 2 imágenes WebP y LCP (meta < 2,5 s en móvil); 3 plugins duplicados y scripts por página; 4 indexación (231 páginas no indexadas diluyen el rastreo); 5 landings ligeras para las URL de pauta. Condición: no romper diseño, formularios ni SEO, y verificar en escritorio y móvil.

## 3. Rediseño y contenido del sitio (octubre–noviembre)

- **Benchmark** frente a competidores (27/10): objetivo de igualar o superar su página de sedes y la velocidad. Inventario de 42 páginas.
- **Tres sedes (desde 27/10):** Santa Bárbara (medicina interna, urgencias 24/7, laboratorio y Tienda de Mascotas), Chicó (medicina preventiva) y Dover | Bivett de la 116 (neurología y oncología). Menú con "Nuestras sedes" entre Servicios y Tienda de Mascotas; urgencias y hospitalización solo en Santa Bárbara.
- **Retiro de servicios inexistentes:** baño, peluquería y spa dejaron de ofrecerse en las dos sedes; se retiraron de las páginas de sedes (29/10) y se definió que no deben aparecer en ningún canal público.
- **Tienda de Mascotas web:** un solo inventario y una sola página para ambas sedes; decisión de cargar los 638 productos disponibles con los precios oficiales de la plataforma de domicilios (carga inicial en borrador el 29/10); el botón de compra está diseñado para abrir WhatsApp con doble opción de sede (sin carrito ni pago en la web).
- **Botones de contacto contextuales (decisión del 5/11, piloto en la página de urgencias):** se sustituyen los dos botones flotantes por un botón en cada sección con texto según el contexto (urgencias, laboratorio, etc.). Regla global de color: amarillo con letras azules en reposo, y azul con letras amarillas al pasar el cursor, implementada como una sola regla CSS global (en lugar de editar página por página); 0 botones fuera de regla verificados en escritorio y móvil en las páginas clave (se midieron ≈ 37 de 243 URL; el resto comparte plantillas).
- **Reglas del sitio:** todo cambio se verifica en escritorio y móvil (la mayoría de visitantes entra por celular); se purga la caché tras cada cambio; ortografía revisada en todo el sitio.
- **Staging:** la copia de pruebas falló en el hosting (28/10); se decidió avanzar con borradores privados en producción y cambios mínimos, con respaldo previo.

## 4. Pendientes

Medir línea base sin sesión (PageSpeed y Search Console), ejecutar las fases 1 a 3 del plan de velocidad, ALT en imágenes pendientes, imagen Open Graph, páginas locales por zona, checkpoint de posiciones a 60 y 90 días de la publicación de agosto, y cierre del problema del editor Elementor en la página Medical Center.

## Fuente

Informes de datos reales de GA4 (21/09), investigación de keywords (25/09), ajustes SEO y enlazado interno (24/09), informe SEO vs Google Ads (5/10), diagnóstico de peso y velocidad (6/11) y registros de ejecución de octubre–noviembre del Sistema Documental Vivo.
