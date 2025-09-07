# Proyecto "Mueblería Hermanos Jota"

## Integrantes

- Lucas Leanza
- Alan Prado
- Lautaro Appelhans
- Karen Gerez
- Matias Banega

## Funcionalidades

- Mostrar un catálogo de productos con imagen, nombre, descripción y precio.
- Navegar a una vista de detalle de producto con información ampliada.
- Añadir productos al carrito, aumentando la cantidad si ya existe el producto.
- Modificar la cantidad de productos dentro del carrito desde la página del carrito.
- Eliminar productos del carrito.
- Contador de productos en el carrito visible en la barra de navegación.
- Cálculo del total del carrito en tiempo real.
- Manejo de errores al cargar los productos desde el JSON.

## Tecnologías utilizadas

- **HTML5**: Estructura de las páginas.
- **CSS3**: Estilos y diseño responsivo mediante grid y flexbox.
- **JavaScript (ES6)**: Lógica de interacción, manejo del DOM, fetch y almacenamiento en sessionStorage.
- **sessionStorage**: Para mantener el estado del carrito durante la sesión.
- **Fetch API**: Para consumir un archivo JSON con los productos.

## Estructura del proyecto

- `index.html`: Página principal.
- `productos.html`: Página con el catálogo de productos.
- `detalleProducto.html`: Página de detalle de un producto individual.
- `carrito.html`: Página que muestra los productos agregados al carrito.
- `css/styles.css`: Archivo con todos los estilos del proyecto.
- `js/data.js`: Archivo con los productos y la lógica de carga de los mismos.
- `js/navbar.js`: Lógica de la barra desplegable de navegación.
- `js/contacto.js`: Lógica de envío del formulario

## Notas

- Todas las operaciones se realizan en el navegador, sin backend.
- Los datos del carrito se mantienen solo durante la sesión, gracias a `sessionStorage`.
- Se puede reemplazar el JSON con productos reales para simular un catálogo más grande.
