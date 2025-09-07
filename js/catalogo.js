let productosGlobales = [];

//Funcion para limpiar el contenedor de catalogo
function limpiarContenedor() {
    const contenedor = document.getElementById("catalogo");
    if (!contenedor) return
    //Elimino todos los nodos hijos del catálogo
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function cargarCatalogo(productos) {
    const contenedor = document.getElementById("catalogo");
    if (!contenedor) return;

    //Limpio el contenedor antes de renderizarlo
    limpiarContenedor();

    productos.forEach(producto => {
        //Creo la tarjeta
    let card = document.createElement("div");
    card.classList.add("productos-card");
    
    //Imagen
    //Creo la imagen como un <a> para que al hacer click en la foto también lleve a la página del producto.
    let imgContainer = document.createElement("a");
    imgContainer.href = "#"
    imgContainer.classList.add("img-container");

    let img = document.createElement("img");
    img.classList.add("producto-img");
    img.src = producto.img;
    img.alt = producto.nombre;

    imgContainer.appendChild(img);

    //Info
    //Creo un div .info para agrupar nombre, precio y descripcion
    let info = document.createElement("div");
    info.classList.add("producto-info");

    //Creo cada elemento y le asigno clases para dar estilos por separado
    let nombre = document.createElement("h3");
    nombre.classList.add("producto-nombre");
    nombre.textContent = producto.nombre;

    let precio = document.createElement("p");
    precio.classList.add("producto-precio");
    precio.textContent = `$${producto.precio.toLocaleString()}`

    //Agrego nombre, precio y descripcion al div .info
    info.appendChild(nombre);
    info.appendChild(precio);

    //Botones
    //Creo un div .botones para agrupar ambos botones
    let botones = document.createElement("div");
    botones.classList.add("producto-botones");

    //Creo cada boton
    let botonDetalles = document.createElement("button");
    botonDetalles.textContent = "Ver Detalles";
    botonDetalles.classList.add("ver-detalles");

    let botonCarrito = document.createElement("button");
    botonCarrito.textContent = "Agregar al Carrito";
    botonCarrito.classList.add("agregar-carrito");

    //Agrego los botones al div .botones
    botones.appendChild(botonDetalles);
    botones.appendChild(botonCarrito);

    //Agrego elementos a la tarjeta
    card.appendChild(imgContainer);
    card.appendChild(info);
    card.appendChild(botones);

    //Agrego la tarjeta al contenedor
    contenedor.appendChild(card);
    })
}

fetch("../data/productos.json")
    .then(res => res.json())
    .then(productos => {
        productosGlobales = productos;
        cargarCatalogo(productosGlobales);
    })
    .catch(error => console.error("Error al cargar productos:", error));

document.addEventListener("DOMContentLoaded", () => {
  const inputBuscador = document.getElementById("buscar-productos");
  if (!inputBuscador) return;

  // Detecto si se escribió algo en el input
  inputBuscador.addEventListener("input", () => {
    const texto = inputBuscador.value.toLowerCase();

    // Filtro los productos que coincidan con el input
    const filtrados = productosGlobales.filter(p => p.nombre.toLowerCase().includes(texto));

    // Renderizo unicamente los productos filtrados
    cargarCatalogo(filtrados);
  });
});
