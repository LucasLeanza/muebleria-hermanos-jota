let catalogoMuebles = [
    {   id: 1, 
        nombre: "Aparador Uspallata", 
        precio: 150000, 
        img: "img/Aparador Uspallata.png",
        descripcion: "",
    },
    {   id: 2, 
        nombre: "Biblioteca Recoleta", 
        precio: 120000, 
        img: "img/Biblioteca Recoleta.png",
        descripcion: " ",
    },
    {   id: 3, 
        nombre: "Butaca Mendoza", 
        precio: 80000, 
        img: "img/Butaca Mendoza.png",
        descripcion: " ",
    },
    {   id: 4, 
        nombre: "Sillón Copacabana", 
        precio: 200000, 
        img: "img/Sillón Copacabana.png",
        descripcion: " ",
    },
    {   id: 5, 
        nombre: "Mesa de Centro Araucaria", 
        precio: 90000, 
        img: "img/Mesa de Centro Araucaria.png",
        descripcion: " ",
    },
    {   id: 6, 
        nombre: "Mesa de Noche Aconcagua", 
        precio: 60000, 
        img: "img/Mesa de Noche Aconcagua.png",
        descripcion: " ",
    },
    {   id: 7, 
        nombre: "Cama Neuquén", 
        precio: 250000, 
        img: "img/Cama Neuquén.png",
        descripcion: " ",
    },
    {   id: 8, 
        nombre: "Sofá Patagonia", 
        precio: 300000, 
        img: "img/Sofá Patagonia.png",
        descripcion: " ",
    },
    {   id: 9, 
        nombre: "Mesa Comedor Pampa", 
        precio: 220000, 
        img: "img/Mesa Comedor Pampa.png",
        descripcion: " ",
    },
    {   id: 10, 
        nombre: "Sillas Córdoba", 
        precio: 70000, 
        img: "img/Sillas Córdoba.png",
        descripcion: " ",
    },
    {   id: 11, 
        nombre: "Escritorio Costa", 
        precio: 110000, 
        img: "img/Escritorio Costa.png",
        descripcion: " ",
    },
    {   id: 12, 
        nombre: "Silla de Trabajao Belgrano", 
        precio: 95000, 
        img: "img/Silla de Trabajo Belgrano.png",
        descripcion: " ",
    }
];

const container = document.getElementById("productos-container");

catalogoMuebles.forEach(producto => {
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

    let descripcion = document.createElement("p");
    descripcion.classList.add("producto-descripcion");
    descripcion.textContent = producto.descripcion;

    let precio = document.createElement("p");
    precio.classList.add("producto-precio");
    precio.textContent = `$${producto.precio.toLocaleString()}`

    //Agrego nombre, precio y descripcion al div .info
    info.appendChild(nombre);
    info.appendChild(descripcion);
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
    container.appendChild(card);
});

