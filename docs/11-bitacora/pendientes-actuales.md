# Pendientes actuales (corte 26/11/2026)

## Prioridad alta

**Agente de IA y bot en Instagram y Facebook** (ver `docs/05-ia-automatizacion/agente-ia-kommo-redes-sociales.md`)
- Desde el 25/11 el agente está desactivado por el congelamiento del pago de créditos y responde el bot v3. Decidir el disparador por horario, probarlo con chats reales y cargar las ramas nuevas (pagos, resultados, certificado, médico específico, cita fuera de horario, queja).
- Decisión de dirección administrativa y gerencia: créditos de IA, asistente propio con la API de Claude (medir costo real con clave de prueba) o cambio de CRM (demo con el proveedor el 3/12). Al aprobar créditos se apaga el bot v3 y se reactiva el agente.
- Corregir horarios viejos en las fuentes de conocimiento del agente, agregar la pauta de quejas y probar la regla de urgencias fuera de horario.
- Decisión legal de gerencia sobre la autorización de datos y revisión semanal (próxima: 27/11).

**Agente de la Tienda de Mascotas** (ver `docs/05-ia-automatizacion/agente-pet-center-produccion.md`)
- Responder los traspasos sin respuesta humana, definir quién atiende los de domingo y corregir el saludo automático con horario viejo; quitar promesas de gestiones y reglas de reclamos y proveedores (revisión del 24/11).
- Corregir la lectura de fórmulas (nunca dar la pauta), unificar las reglas de Chicó, de la sede de la alianza y del call center, y alinear secciones contradictorias.
- Confirmar con el proveedor si el agente recibe fecha y hora; si no, tratar festivos manualmente y definir un responsable de escalados de domingos y festivos.
- Llenar la lista de números excluidos (proveedores y laboratorios) y corregir el saludo automático con horario viejo.
- Batería de 20 frases de prueba antes de cada publicación.

**Medición y pauta** (ver `docs/02-marketing-digital/pauta-noviembre-2026-seguimiento.md`)
- Verificar que Urgencias registre conversiones principales tras el cambio del 17/11 y cruzar las conversiones y los leads con el call center para contar citas y pacientes.
- Demand Gen se pausa el 26/11 al cierre del crédito promocional (nada con fondos propios sin decisión de gerencia).
- Promoción de dos días de las Tiendas de Mascotas en Meta (27 y 28/11): verificar aprobación de anuncios, informe de resultados el 29/11 y cerrar el gasto del mes con la facturación de Meta (30/11); hay una diferencia sin explicar entre lectura y facturación.
- Decidir con gerencia si se rediseña la oferta de "Valoración" (pausada).
- Limpiar acciones de conversión (dejar solo contactos reales como principales) y negativas de zonas lejanas, marca y competidores en Urgencias.
- Verificar en GA4 los eventos clave y la agrupación de UTM.

**CRM**
- Consolidar el diligenciamiento directo del call center en Kommo (un lead por cita) y el control de comisiones; el cruce nocturno ya mueve etapas pero conviene validar el canal antes de cargar una venta (falla conocida).
- Vigilar que la pestaña mensual de la hoja del call center siga el formato "MES AÑO" (si no, el cruce falla).
- Agregar teléfono de 10 dígitos e ID del lead en la tabla del call center (condición para devolver ventas a Google Ads).
- Seguimiento humano de los leads de campañas que quedan detenidos tras el mensaje del bot.
- Cobertura de la franja 4:00 p. m. a 7:00 a. m.: definir quién revisa los chats escalados al abrir turno.

**Reputación**
- Antes de fin de diciembre: exportar y guardar textos, informes y reglas de la herramienta de reseñas, y montar la hoja y el flujo semanal propios.
- Aprobar o ajustar los borradores de reseñas negativas y definir el caso en espera de gerencia o jurídico; programar de nuevo las publicaciones de Google (detenidas desde el 29/10); responder a mano las reseñas antiguas de 5 estrellas de Facebook.
- Revisar con jurídico el uso de filtros por calificación (no replicar).

## Prioridad media

- Barrer el horario nuevo del call center en Google Business Profile, Meta, WhatsApp Business y plantillas aprobadas.
- Actualizar Google Business Profile, Linktree y redes con los servicios de Chicó y el cambio de médicos.
- Sitio web: línea base de velocidad y fases 1 a 3; confirmar el efecto del perro del logo en teléfonos reales; vigilar posiciones de cirugía, imágenes y profilaxis; evaluar páginas propias de nutrición, ortopedia y odontología.
- Canal DiDi: enviar el catálogo, resolver los 11 productos sin imagen y definir stock y precios reales.
- Resolver con la plataforma de domicilios la indexación de las dos tiendas en la categoría "Mascotas".
- Primera campaña de solicitud de reseñas por sede (falta base de clientes con consentimiento) y respuesta al backlog por tandas.
- Reexportar con "71 años" el video de reconocimiento si se reutiliza.
- Estandarizar el contenido de redes con las reglas de publicación y el enfoque de cada sede.
- Páginas locales por zona, ALT en imágenes, imagen Open Graph y checkpoint de posiciones de SEO.
- Prototipo de devolución de ventas a Google Ads con la Data Manager API (ver `docs/09-kpis-reportes/conversiones-offline-google-ads-evaluacion.md`).

## Sin actualización desde el corte del 15/08 (verificar vigencia)

- QVET: arquitectura QVET–HUBU–WhatsApp–call center, piloto controlado, plantillas oficiales, responsables y capacitación de usuarios.
- Pet Center en WooCommerce: taxonomía y productos privados o en borrador.
- Permisos de backups y actualización de seguridad de WooCommerce.
- Integración de lectura de datos publicitarios con un conector: la lectura quedó pausada por límite de plan el 2/10/2026.

## Prioridad baja / estratégica

- Evaluar aprobación del Centro de Inteligencia Digital, MVP de App Dover y Programa de Medicina Preventiva.
- Consolidar la versión pública del portafolio, separada de la documentación interna (ver `docs/12-portafolio/`).

## Nota de mantenimiento de esta lista

Cada vez que una tarea se complete, debe **eliminarse de aquí** (no marcarse como completada y dejarse) y, si aporta valor histórico, registrarse en `docs/11-bitacora/cronologia-maestra.md` con su resultado.

## Fuente

Informes y ejecuciones del Sistema Documental Vivo (septiembre–26/11/2026) y `docs/historico/Clinica_Dover_Sistema_Documental_Vivo_Historico_2026.md`, sección 25 (para lo que sigue sin actualización).
