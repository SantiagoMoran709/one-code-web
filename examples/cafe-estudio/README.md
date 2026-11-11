# Café Estudio — ONE CODE

Propuesta independiente de cafetería construida con React, Vite y CSS responsive a partir de la referencia visual proporcionada.

## Iniciar
1. Ejecutar `npm install` si faltan dependencias.
2. Ejecutar `npm run dev`.
3. Abrir la URL local que imprime Vite (puerto 5180).

También puedes hacer doble clic en `Abrir Cafe Estudio.cmd`. Se abrirá una terminal que debes mantener abierta durante la vista previa.

## Compilar
`npm run build` genera la carpeta `dist`. `npm run preview` permite revisarla por HTTP. El proyecto React debe servirse; no se abre haciendo doble clic en index.html.

## Componentes
- Navbar: navegación adaptable, acceso a favoritos y contacto.
- Hero: carrusel manual de tres escenas.
- Features: beneficios del espacio.
- Menu: categorías, destacados, favoritos y detalles de productos.
- About: panel del ambiente e historia conceptual.
- Hours: horarios de demostración.
- Location: dirección ilustrativa y consulta en Google Maps.
- Footer: información del concepto y crédito de ONE CODE.

App.jsx también compone la galería, la sección de visita y las ventanas de detalle. Los favoritos se guardan en localStorage cuando está disponible, sin cuentas ni servidor.

## Datos que deben confirmarse
Este es un concepto de demostración, no la web de un negocio verificado. Los productos, ingredientes, precios, beneficios, horarios y dirección son ejemplos. No se reciben pedidos ni se realizan pagos.

Para activar WhatsApp, introducir el número internacional real (solo dígitos) en `src/data/cafe.jsx`, propiedad `cafe.whatsapp`. Mientras esté vacío, el botón explica que falta conectarlo. Confirmar también dirección, horarios, recetas y fotografías antes de publicar.

## Fotografías
Archivos locales de referencia de Unsplash. Las URLs de origen están en `public/images/sources.txt`. No representan el local real. Las imágenes no son generadas por IA.

Incluido en one-code-web: fuente en examples/cafe-estudio y demo en projects/cafe-estudio.

## Organización visual revisada
Portada → beneficios → presentación → menú → ambiente → horarios y ubicación → pie de página. La interfaz usa una sola hoja de estilos y conserva filtros, favoritos y detalles.
