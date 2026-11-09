# 12 — Portafolio profesional

## Propósito

Este bloque documenta el caso de estudio profesional de Clínica Dover — Sistema Documental Vivo, separado de la documentación operativa interna, para uso en portafolio (CV, entrevistas, LinkedIn).

## Caso de estudio: resumen ejecutivo

**Reto:** ecosistema digital con herramientas disponibles pero sin integración, trazabilidad ni disciplina de medición. El cuello de botella no era tecnológico — era operativo.

**Enfoque aplicado:** auditar antes de implementar; ordenar antes de automatizar; separar responsabilidades de Marketing (genera oportunidades), Comercial (cierra) y Operación (retiene) para medir cada frente con sus propios KPIs.

**Frentes trabajados (mayo–noviembre 2026):**
- Estrategia y gobierno: rol, RACI, plan 30-60-90, Sistema Documental Vivo.
- Paid media: Google Ads (hasta 1.004 conversiones acumuladas al 23/07, tasa de conversión 41,87 %) y Meta Ads (Pet Center, Rappi).
- SEO técnico y de contenido: auditoría, publicación de página de Urgencias, redirecciones y limpieza de sitemap.
- CRM: auditoría de Kommo, pausa como sistema principal (agosto), reutilización como dataset de IA y **reactivación en octubre como sistema de medición**, con etiquetas de origen por canal y campaña, embudo unificado y **cruce nocturno automatizado con el call center** (código en `scripts/`).
- IA aplicada: HUBU y QVET (firma digital + WhatsApp API), con gestión explícita del riesgo de conflicto de arquitectura entre ambos, y un **agente de IA en producción en la Tienda de Mascotas desde el 5/11/2026** (ver `caso-agente-ia-en-produccion.md`).
- Medición: eventos clave de GA4, Tag Manager y estándar de UTM; hallazgo de que Google Ads no registra conversiones mientras Kommo recibe leads.
- Sitio y SEO: datos reales de Search Console y GA4, diagnóstico de rendimiento frente a competidores y reglas del sitio (ver `docs/03-web-seo/`).
- Documentación: construcción de un Sistema Documental Vivo versionado en GitHub, con memoria histórica trazable.

**Resultado tangible más citable:** paso de un ecosistema sin trazabilidad de origen de leads a un diagnóstico cuantificado (ej. solo ~27 % de conversaciones de WhatsApp llegaban a registrarse como lead), con decisiones y next steps derivados directamente de esos datos — no de intuición.

## Casos de estudio específicos

- [`caso-agente-ia-en-produccion.md`](./caso-agente-ia-en-produccion.md) — de los datos a un agente de IA de atención por WhatsApp en producción: enfoque, arquitectura, mi participación, resultados y fallas.

## Aprendizajes estratégicos (para narrar en entrevista o artículo)

- Más herramientas no resuelven problemas de proceso — la mayoría de las herramientas de Dover ya existían antes de esta gestión; el cuello de botella era de adopción y disciplina, no tecnológico.
- La trazabilidad vale más que el volumen: 100 leads sin seguimiento valen menos que 20 completamente trazados.
- Un CRM es un sistema de disciplina, no solo de software.
- Un agente de IA se evalúa con conversaciones reales y KPIs de negocio; los guardarraíles pesan más que la gracia de las respuestas.
- Las "conversiones" de una plataforma publicitaria no son pacientes: hay que cruzar con el sistema comercial.
- El marketing no puede medirse únicamente por ventas finales, porque la venta depende también de comercial y operación.

## Pendiente para consolidar el portafolio público

- Seleccionar evidencias visuales (capturas, antes/después del sitio) que puedan mostrarse sin exponer datos internos de la clínica.
- Redactar una versión narrativa más extensa (artículo/case study) a partir de este resumen.
- Definir qué cifras son presentables públicamente vs. cuáles son solo para uso interno de gerencia.

Material original de mayo 2026 en `docs/historico/2026-05-kickoff/09-portafolio-profesional/`.

## Fuente

`docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`, secciones 26 y 28 (aprendizajes y casos de proyecto), y documentos consolidados en `docs/02-marketing-digital/`, `docs/03-web-seo/`, `docs/04-crm-leads/`.
