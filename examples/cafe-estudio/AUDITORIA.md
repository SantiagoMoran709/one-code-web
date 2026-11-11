# Auditoría 01 — Café Estudio

Revisión posterior a la auditoría proporcionada, realizada el 10 de noviembre de 2026. Proyecto demostrativo de ONE CODE. Se conserva la dirección visual y se mejora la calidad de la versión publicada.

## Cambios implementados

- Fotografías WebP en dos variantes por imagen. El navegador elige el tamaño con srcset y sizes.
- Peso original de fotografías: 1.099.760 bytes. Nuevos WebP, sumando ambas variantes: 476.270 bytes. Reducción del 56,7 % (57 % redondeado). No equivale a una medición de velocidad o puntuación Lighthouse.
- Dimensiones intrínsecas en las imágenes, carga diferida fuera de portada y prioridad alta para la primera imagen del carrusel.
- Fuentes locales, sin solicitar Google Fonts durante la visita. Licencias OFL incluidas en public/fonts.
- Espaciado compartido entre secciones; entradas suaves al desplazarse, desactivadas cuando se prefiere movimiento reducido.
- Estado de sección activa en la navegación mediante aria-current.
- Controles de favoritos, cierre, menú, carrusel e indicadores ampliados a 44 px.
- Mayor contraste en textos secundarios sobre fondo crema.
- Componente reutilizable CafeImage y código fuente formateado.
- Consulta de visita editable, con los favoritos incluidos y confirmación de copia. No se genera una orden ni se calcula un carrito.
- Ningún número real añadido. Sin número configurado, no se ofrece enlace de envío. Con un número internacional confirmado, el enlace genera un mensaje codificado para WhatsApp, que debe confirmar el visitante.

## Comprobaciones realizadas

| Comprobación | Resultado observado |
| --- | --- |
| Compilación de producción con Vite | Correcta |
| Filtro Todos | Se muestran los 6 productos |
| Filtro Postres | Se muestra el cheesecake |
| Favorito y recarga | Se conserva en el navegador |
| Quitar favorito y abrir favoritos | Estado vacío explicativo |
| Consulta con favoritos | Incluye el producto guardado |
| Editar y copiar consulta | Confirmación «Mensaje copiado.» |
| Escape en ventana modal | Cierra y devuelve foco al control de apertura |
| Menú móvil | Abre, navega a la sección y cierra |
| Galería ampliada | Imagen WebP y descripción correctas |
| Anchos 320, 390, 768 y 1440 px | Sin desbordamiento horizontal observado |
| Controles táctiles principales | Dimensiones mínimas de 44 px comprobadas |
| Fuentes locales | Cargadas en la versión compilada |
| Consola en la sesión de revisión | Sin errores ni advertencias capturados |

## Límites y pendientes

No se ejecutó Lighthouse ni PageSpeed Insights; no se atribuye ninguna puntuación ni cumplimiento formal de accesibilidad. Las comprobaciones de navegador y tamaños no sustituyen pruebas en todos los dispositivos. La preferencia de movimiento reducido tiene implementación CSS y JavaScript; no se realizó una medición automatizada de esa preferencia.

Los datos de negocio, horarios, dirección, recetas y precios siguen siendo ilustrativos. WhatsApp real, pedidos, pagos, panel administrativo y promociones quedan pendientes de una siguiente fase o de datos confirmados por el propietario.
