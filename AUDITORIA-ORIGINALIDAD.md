# Revisión integral de originalidad

Fecha: 22 de octubre de 2026. Ámbito de escritura: exclusivamente `abogado-jose-antonio-vazquez-sanchez/`.

## Método y referencias

Antes de cambiar el diseño se inspeccionaron los HTML y CSS de los doce proyectos disponibles: componentes de acción, declaraciones tipográficas y pesos, medidas de titulares, párrafos, navegación, separadores, márgenes, retículas, fotografía, hovers, transiciones, entradas, contactos, pies y reglas responsive. Se guardó una copia del sistema anterior del abogado en `.qa/before-revision/` y el CSS de referencia en `.qa/reference-styles.json`.

Después se obtuvieron capturas reales de las portadas y los contactos/pies de los doce proyectos a 1280 px, servidos para lectura sin alterar sus archivos. Se revisaron las láminas `.qa/comparison-top.png` y `.qa/comparison-contact.png`, las capturas del abogado a cuatro anchuras, las páginas completas y los recortes de contacto y hover. En Vending, que no tiene capítulo de contacto, se capturaron ubicación y pie.

| Proyecto | Rasgos observados | Decisión para el abogado |
| --- | --- | --- |
| Café-Pub Andalucía | Hero fotográfico con texto superpuesto; serif con cursivas; acciones rellenas y flecha diagonal; contacto con directorio lateral | Portada sin foto, bandas en sans de peso medio, acciones documentales sin relleno y sin flechas Unicode |
| Club Deportivo Stilos | Barlow Condensed extrabold, titulares compactos deportivos; botones de rectángulo relleno o borde completo; contacto rojo | Archivo Narrow 500 con mayor interlínea y sin solapamiento, ninguna acción rectangular cerrada |
| El Bosque Vending 24h | Sans gruesa, botones lima redondeados, hero dividido, mapa gráfico y pie oscuro | Pestañas de documento, paleta del encargo, acciones abiertas sin radios y ficha de dirección textual |
| Fontanería Londro | Arial gruesa, fotografía técnica panorámica, botones de 52 px rellenos/contorneados, fade-up | Fuentes locales distintas, hero nominal, acciones con referencias y divisores trazados sin aparición vertical |
| Realty Canoe | Bodoni y Manrope, rail lateral, foto de portada, secuencia de cinco fotografías, teléfono vertical fragmentado | Rail eliminado, fuentes diferentes, dos bandas nominales, una sola fotografía montada al margen y teléfono en una línea |
| La Casa del Muro | Newsreader y Jakarta, serif con imagen, botón sólido, contacto de dos registros y pie horizontal de marca | Literata y Source Sans 3, ritmo de documento, acciones diferenciadas y firma editorial en tres ejes |
| La Casita de El Bosque | Serif, arcos y sello, hero dividido, contacto centrado verde y footer de varias columnas | Sin formas de arco ni sello, sin hero dividido, registros asimétricos y colofón de firma |
| Miel El Bosque | Bodoni, portada centrada con producto, serif en cursiva, llamada rellena y centrada | Nombre alineado a eje lateral, sin producto ni cursivas; llamadas con doble filete |
| Panadería El Rescoldo | Archivo Black y Manrope, gran nombre horizontal, foto inmediatamente debajo, botones rellenos; enorme marca al pie | Archivo Narrow de peso medio con dos líneas y otra proporción, hero sin foto, pie con firma pequeña y datos separados |
| Peluquería Mari Carmen | Space Grotesk/Plex Sans, nombre de gran formato y fotografía debajo, acordeones con previews, enlaces subrayados con flecha diagonal | Sin acordeones ni preview, Literata/Source Sans 3, acciones DM Mono con referencias y trazado propio |
| Pintor José Luis Gracia Pavón | Newsreader y Manrope, serif escalonada, mosaico, botón rectangular; foto y fade-up con clip | Nombre sans sin escalonado, un único montaje fotográfico y clip horizontal solo sobre bandas tipográficas |
| Restaurante Puerta del Parque | Serif y cursivas, foto recortada en arco, botones sólidos y secciones alternas; contacto verde | Sin cursivas, arcos o alternancia de fotos, acciones diferenciadas y composición de registro |

## Comprobación por componente

| Componente | Coincidencia eliminada | Sistema aplicado |
| --- | --- | --- |
| Nombre profesional | Serif Georgia en tres líneas escalonadas, parentesco visual con las composiciones editoriales existentes | Archivo Narrow 500, dos bandas nominales, mayúsculas, tracking positivo .005em e interlínea 1.07; otra escala en móvil |
| Titulares secundarios | Serif grande con remate en cursiva coloreada | Literata 400 con tamaño óptico automático, interlínea 1.36–1.50, tamaño subordinado al nombre y ninguna cursiva |
| Párrafos | Arial a 13–18 px en bloques largos uniformes | Source Sans 3; primer texto a 21 px, nota de 17 px sobre eje distinto; lectura continua con margen de anotación en móvil |
| Etiquetas y acciones | Sans pequeña espaciada y misma familia que el cuerpo | DM Mono local; numeración tabulada, referencias [ C ], [ T ], [ U ] y § 01–03 |
| Contacto | Enlace genérico subrayado y flecha diagonal | Límites verticales, filete parcial y flecha hacia abajo; crecimiento de línea al interactuar |
| Llamada | Botón estándar sólido o enlace con subrayado simple | Doble filete de base y referencia [ T ], sin fondo; flecha horizontal con asta corta |
| Ubicación | Mismo estilo de llamada y contacto | Arranque vertical, referencia encima, flecha de recorrido y línea que se extiende desde el extremo derecho |
| Copiar | Texto más signo de suma genérico | Referencia, signo geométrico de duplicación y estado de confirmación tras copiar; anuncio accesible y alternativa manual |
| Iconografía | Glifos ↗ y ＋ repetidos en distintas landings | Flechas de líneas CSS, dos hojas esquemáticas y retorno angular; no se importa un conjunto de iconos |
| Navegación | Rail lateral de Canoe y menú móvil desplegable | Índice de pestañas numeradas: cinco destinos siempre visibles, membrete en flujo e índice sticky independiente; sin hamburguesa |
| Bordes y separadores | Filetes simples idénticos en todos los bloques | Terminación angular de capítulo, doble regla de dirección, líneas progresivas en principios y referencias de acción específicas |
| Retícula y ritmo | Mismo margen global y secciones de alturas equivalentes | Retícula de ocho medidas: ejes 1/8 y 2/8; grandes blancos nominales, lectura compacta y banda de enfoque con tono propio; sin secciones a 100svh |
| Fotografía | Imagen plana de ancho convencional con pie en una fila | Montaje único con margen de encuadernación, referencia vertical y leyenda desplazada; foto ilustrativa y licencia conservadas |
| Hover | Elevación de botón, traslación diagonal y simple cambio de color | Crecimiento dirigido de filetes y desplazamiento contenido de flechas según la función; sin elevar bloques |
| Entrada | Fade-up uniforme con opacidad y translateY | Revelado horizontal del nombre y el titular; dibujo de divisores; contenido de los demás capítulos estático |
| Contacto final | Gran titular arriba, teléfono a ancho completo y tres acciones en una fila, datos debajo | Identidad y dirección agrupadas en un eje; registro de teléfono y acciones en otro, ubicación en renglón independiente; firma fuera del fondo oscuro |
| Footer | Barra de copyright con enlace flecha al extremo | Colofón de firma: profesión/localidad, nombre con trazo lateral y retorno/año con marca de cierre; adaptación móvil en dos filas |
| Móvil | Barra con botón Índice, contenido comprimido y copia de la retícula desktop | Cinco pestañas táctiles permanentes; etiqueta nominal horizontal, registro geográfico y contacto apilados, lectura con margen, localización desglosada y colofón propio |

Las fuentes originales se sirven desde archivos locales con sus OFL. No se copiaron componentes HTML/CSS de otras carpetas. Se mantuvieron los datos reales, el teléfono, Maps, el portapapeles, el indicador activo, el SEO y el soporte de movimiento reducido. El desplegable se sustituyó por el acceso permanente a los cinco capítulos, conforme a esta revisión.

## Evidencia funcional y de integridad

Verificación en Chrome a 375, 768, 1440 y 1920 px: nombre sin recortes, sin desbordamiento horizontal, cuatro fuentes cargadas, cero imágenes rotas, cero anclas inexistentes y cero excepciones JavaScript del proyecto. A 375 px, cada pestaña mide 72 × 62 px en el viewport comprobado. Todos los destinos probados se enfocan y quedan por debajo del índice fijo.

Se comprobó la copia real de `647280789` y el estado anunciado, la alternativa manual tras bloquear las API de copia, las URL de llamada y la dirección exacta de Maps, el crecimiento del filete de hover, la desactivación de animaciones y desplazamiento suave con movimiento reducido, y la lectura/navegación sin JavaScript. Resultados en `.qa/results.json`.

Integridad de los proyectos anteriores: 202 archivos comparados por SHA-256 con la instantánea previa, cero cambios. Resultado en `.qa/other-projects-verification.json`. No se han añadido frameworks, configuraciones Netlify ni realizado despliegues.
