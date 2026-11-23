# Canal DiDi (comercio electrónico de terceros) — estado al 23/11/2026

## Decisión de partida

El 4/11 se descartó la integración por API con el desarrollador de la plataforma y se eligió la **vía manual**, con una sola tienda de arranque (Santa Bárbara). Motivo: el costo de integrar no se justifica antes de validar demanda.

## Avance del catálogo (19/11)

- El área de mercadeo diligenció el catálogo: **782 productos**, con SKU propios de Dover, stock inicial uniforme y todos activos.
- **Imágenes:** 771 de 782 con URL (98,6 %). Una parte ya estaba en el sitio y el resto se copió desde el catálogo de Dover en la otra plataforma de domicilios a la biblioteca de medios del sitio, para no depender del CDN de un tercero. Cuatro imágenes de baja resolución se ampliaron (calidad limitada: conviene reemplazarlas por foto original).
- **Calidad de datos:** se completaron campos vacíos y se renombraron SKU con colisión; el registro de cambios queda en la versión 3 del archivo.

## Riesgos

- Los SKU renombrados rompen la correspondencia directa con el sistema interno al actualizar precio o stock.
- Las imágenes quedan duplicadas en la biblioteca de medios; limpiar cuando la plataforma ya las haya descargado.
- Hay diferencias de precio entre sedes y entre plataformas que deben confirmarse antes de publicar.
- El stock uniforme no refleja existencias reales.

## Pendientes

1. Enviar la versión 3 del catálogo a la plataforma y preguntar si admite productos sin imagen, el nombre del método de carga y el plazo de creación.
2. Resolver los 11 productos sin imagen y confirmar pares de SKU duplicados.
3. Definir el stock real inicial y un responsable diario de precio y stock en la Tienda de Mascotas.

## Fuente

Reunión con el desarrollador (4/11/2026) y ejecución del catálogo (19/11/2026), del Sistema Documental Vivo.
