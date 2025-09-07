//Fetch de productos.json
fetch("../data/productos.json")
  .then(res => res.json())
  .then(productos => {
        // Obtener el id desde la URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // Buscar el producto en el array 
    const producto = productos.find(producto => producto.id === id);

    // Contenedor donde se mostrará el detalle
    const contenedor = document.getElementById("detalle-producto");

    // Tarjeta
    let card = document.createElement("div");
    card.classList.add("detalle-card");

    // Imagen
    let img = document.createElement("img");
    img.src = producto.img;
    img.alt = producto.nombre;

    // Info
    let info = document.createElement("div");
    info.classList.add("info");

    // Título
    let titulo = document.createElement("h1");
    titulo.textContent = producto.nombre;

    // Descripción
    let lista = document.createElement("ul");
    lista.classList.add("descripcion-lista");

    producto.descripcion.forEach(item => {
      let li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    });


    // Precio
    let precio = document.createElement("p");
    precio.classList.add("precio");
    precio.textContent = `$${producto.precio.toLocaleString()}`;

    // Botón agregar al carrito
    let boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    boton.classList.add("btn-carrito");

    // Armar estructura
    info.append(titulo, lista, precio, boton);
    card.append(img, info);
    contenedor.appendChild(card);
  })
  .catch(error => console.error("Error al cargar productos:", error));