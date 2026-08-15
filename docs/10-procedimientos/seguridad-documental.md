# Seguridad documental — reglas para este repositorio público

Este repositorio es **público** desde el 15 de agosto de 2026. Aplica siempre:

## Nunca publicar

- Contraseñas, tokens, API keys, credenciales de ningún sistema (WordPress, Kommo, Meta Business, Google Ads, QVET, etc.).
- Datos médicos de pacientes/mascotas.
- Nombres, teléfonos o correos personales de clientes, proveedores o colaboradores individuales. Cuando sea necesario referenciar un rol, usar el rol o un identificador genérico (ej. "Comercial 1", "responsable de Pet Center"), nunca el nombre propio.
- IDs internos que permitan correlacionar información sensible (números de caso de soporte con datos asociados, IDs de conversación con contenido de cliente, etc.) salvo que ya sean intrascendentes fuera de contexto.

## Si se detecta un secreto ya publicado en el historial de Git

1. No copiarlo ni republicarlo en ningún documento nuevo.
2. No eliminarlo del historial sin autorización explícita del responsable del proyecto (reescribir historial de Git requiere decisión humana).
3. Informar su ubicación exacta (archivo + commit) al responsable del proyecto.
4. Recomendar rotar la credencial de inmediato en el sistema correspondiente.

## Información institucional vs. personal

Es apropiado publicar: nombre de la clínica, sedes, horarios, servicios, líneas telefónicas **institucionales** ya publicadas por Dover en su sitio web o redes sociales (ej. línea de urgencias, WhatsApp institucional), correo institucional público (ej. contacto general), cifras agregadas de campañas/CRM/SEO.

No es apropiado publicar: líneas directas o correos de colaboradores individuales, nombres de médicos o personal asociados a su número de contacto directo, datos de clientes/pacientes aunque estén anonimizados parcialmente (ej. iniciales + número de mascota si permite reidentificación).
