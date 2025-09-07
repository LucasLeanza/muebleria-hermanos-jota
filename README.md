## 🪑 Mueblería Hermanos Jota

Proyecto del curso **Full Stack Developer de ITBA**.  
Se trata de un e-commerce ficticio de muebles artesanales, con catálogo dinámico, detalle de producto y carrito de compras persistente en **sessionStorage**.


## 👥 Integrantes

- Lucas Leanza (Catálogo, organización del código y resolver bugs de responsividad)
- Alan Prado (Página de Detalle de Productos)
- Lautaro Appelhans (CSS de todas las páginas, organización del código e integración del carrito)
- Karen Gerez (Estructura del Index y maqueta del diseño)
- Matias Banega (Página de Contacto)

## 🌟 Funcionalidades principales

- **Páginas:**
  - `index.html`: Home / presentación de la marca.
  - `catalogo.html`: Catálogo de productos dinámico.
  - `detalle-producto.html`: Detalle de cada producto.
  - `carrito.html`: Carrito de compras.

- **Catálogo:**
  - Productos cargados desde `data/productos.json` con **Fetch API**.
  - Cards con imagen, nombre, descripción, precio y botones.
  - Barra de búsqueda para filtrar productos.

- **Detalle de producto:**
  - Imagen ampliada, nombre, precio y descripción.
  - Botón para agregar al carrito.

- **Carrito de compras:**
  - Visualización de los productos agregados.
  - Incrementar/decrementar cantidades.
  - Eliminar productos.
  - Cálculo automático del total.
  - Persistencia con `sessionStorage`.
  - Contador de productos en el navbar.

- **Responsive design:**
  - Mobile first, adaptado a tablets y desktop.
  - Layouts flexibles con Flexbox y Grid CSS.

## 🛠️ Tecnologías utilizadas

- **HTML5**: estructura semántica.  
- **CSS3**: mobile-first, variables, Flexbox, Grid.  
- **JavaScript (ES6+)**: módulos, manipulación del DOM, Fetch API, sessionStorage.  
- **Google Fonts** (Inter y Playfair Display).  
- **Font Awesome** (iconos).

## 📂 Estructura del proyecto

muebleria-hermanos-jota/
├── css/
│ └── styles.css
├── data/
│ └── productos.json
├── img/
│ └── ... (logo y productos)
├── js/
│ ├── catalogo.js
│ ├── detalle-producto.js
│ ├── carrito.js
│ ├── cartHelper.js
│ └── navbar.js
├── index.html
├── catalogo.html
├── detalle-producto.html
├── carrito.html
└── README.md

## 📝Notas

- Todas las operaciones se realizan en el navegador, sin backend.
- Los datos del carrito se mantienen solo durante la sesión, gracias a `sessionStorage`.
- Se puede reemplazar el JSON con productos reales para simular un catálogo más grande.