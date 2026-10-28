# José Antonio Vázquez Sánchez · Abogado

Web estática rediseñada el 28 de octubre de 2026. Abrir `index.html` con Live Server. HTML5, CSS3 y JavaScript vanilla, sin instalación, compilación o despliegue.

## Diseño y contenido

Identidad centrada en el nombre, fondos marfil, verde sobrio y tipografía Literata con Source Sans 3. Portada, presentación personal, consultas y contacto. Navegación móvil desplegable con cierre mediante Escape y al seleccionar un destino; sin JavaScript los enlaces permanecen visibles. Transiciones discretas compatibles con `prefers-reduced-motion`.

Se conservan los datos documentados en el proyecto anterior: nombre, actividad de abogado, teléfono 647 280 789 y dirección Edificio El Andén, Plaza El Andén, s/n, Local 2A, 11670 El Bosque, Cádiz. No se ha realizado una verificación externa nueva de esos datos. No hay especialidades acreditadas en la documentación disponible; por ello se ofrece una invitación general a consultar por teléfono. No se añaden experiencia, formación, colegiación, horarios, correo electrónico, WhatsApp ni promesas de resultados.

No hay formularios, analítica, mapas incrustados o dependencias remotas. Los enlaces de teléfono abren el marcador; el enlace de ubicación abre una búsqueda de la dirección en Google Maps. Los textos y datos profesionales de los documentos legales siguen pendientes de ser facilitados y validados por el titular; no se han creado documentos o enlaces ficticios.

## Recursos existentes reutilizados

Fuentes locales Literata y Source Sans 3, con sus licencias OFL en `fonts/`. Las otras fuentes del proyecto anterior se conservan sin cargarlas.

Fotografía local `img/luz-arquitectura.jpg`, de Khadijah Karaca, procedente de Pexels. Es ilustrativa y se indica en su leyenda y texto alternativo; no representa al abogado ni su despacho. Se conserva la documentación de origen: https://www.pexels.com/photo/a-long-hallway-with-sunlight-coming-through-the-windows-27566337/ y licencia https://www.pexels.com/license/ (documentadas en el proyecto previo el 22 de octubre de 2026).

## Comprobaciones ejecutadas

- `node --check js/script.js`: correcto.
- Chrome headless real a 375, 768, 1440 y 1920 px: sin desbordamiento horizontal, imágenes rotas, anclas inexistentes, errores JavaScript o respuestas HTTP fallidas; ambas fuentes cargadas.
- Apertura y cierre del menú móvil al navegar, foco del destino y enlaces `tel:` correctos.
- Movimiento reducido: desplazamiento automático sin suavizado.
- JavaScript deshabilitado: navegación visible y botón de menú oculto.
- Revisión visual de la página completa a 375 px y portada a 1440 px.

Resultados y capturas actuales: `.qa/redesign-results.json`, `.qa/redesign-*.png` y `.qa/redesign-full-*.png`. Script: `.qa/redesign-check.cjs`. Las evidencias anteriores de `.qa/` son históricas y no validan esta versión. No se ha probado en un iPhone físico ni Safari, ni se ha validado el marcador externo de Google Maps. No se ha hecho una auditoría legal o certificación de accesibilidad.

Solo se ha trabajado dentro de esta carpeta, sin modificar otras webs ni añadir configuración de alojamiento.
