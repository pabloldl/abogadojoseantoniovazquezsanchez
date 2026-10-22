# José Antonio Vázquez Sánchez · Abogado

Web estática independiente con HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server de VS Code. No requiere instalación ni compilación.

## Diseño vigente

Revisión integral del 22 de octubre de 2026, documentada en [AUDITORIA-ORIGINALIDAD.md](AUDITORIA-ORIGINALIDAD.md). Se sustituyeron la composición nominal serif, el índice lateral, el menú desplegable, las acciones con flechas Unicode, la retícula anterior, el fade-up y el contacto y pie originales.

La navegación actual es un índice compacto de cinco pestañas siempre visibles, también en móvil, sin hamburguesa ni desplegable. El membrete queda en el flujo; únicamente el índice permanece pegado al borde superior. Los enlaces conservan Portada, Despacho, Enfoque, Ubicación y Contacto y su indicador activo.

Sistema tipográfico local:

- Archivo Narrow, peso 500: nombre en mayúsculas sobre dos bandas; conceptos, teléfono y nombre del edificio.
- Literata, peso 400 y tamaño óptico automático: titulares secundarios y firma de cierre, sin cursivas.
- Source Sans 3: párrafos humanistas y navegación.
- DM Mono: acciones, numeración y datos de referencia.

Las cuatro familias están en `fonts/`, con sus licencias SIL Open Font License 1.1 sin modificar. Proceden del repositorio oficial Google Fonts: [Archivo Narrow](https://github.com/google/fonts/tree/main/ofl/archivonarrow), [Literata](https://github.com/google/fonts/tree/main/ofl/literata), [Source Sans 3](https://github.com/google/fonts/tree/main/ofl/sourcesans3) y [DM Mono](https://github.com/google/fonts/tree/main/ofl/dmmono). Son recursos locales: el navegador no contacta con Google Fonts.

Las acciones tienen referencias entre corchetes y geometrías CSS propias: contacto con límites verticales y flecha descendente; llamada con doble filete; ubicación con arranque vertical, flecha de recorrido y línea que crece desde la derecha. Copiar cuenta con un signo de duplicación que cambia tras la copia. No hay rellenos genéricos, sombras, píldoras ni degradados. La identidad y el favicon siguen siendo propuestas provisionales, no un logotipo oficial.

## Imagen y licencia

- Archivo local: `img/luz-arquitectura.jpg`, 1920 × 1280 px, aproximadamente 151 KB.
- Autora: Khadijah Karaca, a través de Pexels.
- [Fotografía original: A long hallway with sunlight coming through the windows](https://www.pexels.com/photo/a-long-hallway-with-sunlight-coming-through-the-windows-27566337/).
- [Licencia Pexels](https://www.pexels.com/license/), consultada el 22 de octubre de 2026. Permite uso gratuito y modificación, también en una web comercial. No implica respaldo de la autora ni permite redistribución como producto de stock independiente.
- Origen de la copia optimizada: `https://images.pexels.com/photos/27566337/pexels-photo-27566337.jpeg?auto=compress&cs=tinysrgb&w=1920`.
- Recorte mediante CSS, desaturación discreta y carga diferida. Se conserva la única fotografía del proyecto y se cambia su montaje: margen de encuadernación, referencia lateral y leyenda desplazada.
- Es ilustrativa: no representa el despacho, el edificio ni una ubicación confirmada del abogado. Se indica expresamente en el pie y en el texto alternativo.

Todos los recursos se sirven localmente. Google Maps únicamente se abre al pulsar sus enlaces. No hay mapas incrustados, recursos remotos automáticos, analítica ni cookies de seguimiento.

## Contenido y documentación pendiente

Se mantienen el nombre, actividad, dirección y teléfono proporcionados. Claridad, Rigor y Discreción son principios de comunicación, sin promesas de resultados. No se atribuyen especialidades, experiencia, colegiación, horarios, honorarios o disponibilidad no facilitados.

El HTML contiene un punto comentado para incorporar la documentación profesional y legal que facilite y valide el titular. No se ha inventado un aviso legal, política de privacidad o datos fiscales, ni se afirma cumplimiento normativo.

SEO conservado: título local, meta description, Open Graph textual y JSON-LD LegalService con información confirmada. No se inventa un dominio para canonical, og:url o imagen social absoluta.

## Funcionalidad y accesibilidad

- Índice activo durante la lectura y enlaces a capítulos con destino enfocable.
- Enlace para saltar al contenido, foco visible y cinco pestañas accesibles sin JavaScript.
- Llamadas a `tel:+34647280789`; copia exacta de `647280789` con anuncio mediante `role="status"`.
- Si el portapapeles no está disponible se intenta la copia tradicional; si también falla, aparece un campo seleccionado para copiar manualmente.
- Dos enlaces Maps con la dirección completa exacta, sin coordenadas inventadas. Aviso accesible de apertura en otra pestaña y `rel="noopener noreferrer"`.
- Revelado horizontal de bandas de texto y trazado de divisores; sin fade-up ni desplazamiento de secciones. Las transiciones, las animaciones y el scroll suave se desactivan con `prefers-reduced-motion`, incluso cuando se activa durante la sesión.
- En móvil, pestañas de al menos 62 px de alto y acciones de al menos 48 px; composición nominal, ficha de dirección, contacto y colofón adaptados individualmente.

## Verificación ejecutada

`node --check js/script.js` correcto. Pruebas reales en Chrome headless a 375, 768, 1440 y 1920 px, con revisión visual de portadas, páginas completas y contactos:

- Sin desbordamiento horizontal, imágenes rotas, anclas inexistentes ni errores JavaScript del proyecto.
- Las cuatro fuentes locales se cargan y las dos líneas del nombre caben sin recorte.
- Cinco pestañas visibles con zonas táctiles superiores a 44 px.
- Navegación, indicador activo y foco correctos en Despacho, Enfoque, Ubicación y Contacto; el índice fijo no tapa el destino.
- Copia real al portapapeles: `647280789`; también comprobada la alternativa manual tras simular bloqueo de las dos API de copia.
- Enlaces telefónicos y consultas de Maps verificados. No se ha comprobado un marcador dentro del servicio externo.
- Línea de acción extendida al interactuar, modo de movimiento reducido y lectura/navegación sin JavaScript comprobados.

Evidencias locales ignoradas en `.qa/`: `results.json`, capturas `screen-*`, `full-*` y `contacto-*`, `actions-hover.png`, láminas `comparison-top.png` y `comparison-contact.png` de los doce proyectos anteriores. No son necesarias para usar la web. Estas pruebas no son una certificación de accesibilidad ni una auditoría legal.

Se compararon hashes SHA-256 de 202 archivos de los otros doce proyectos antes y después: cero cambios (`.qa/other-projects-verification.json`). Todo el trabajo se limita a esta carpeta. No se añadieron frameworks, configuraciones de Netlify ni despliegues.
