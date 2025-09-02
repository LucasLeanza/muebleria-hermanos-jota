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
    let card = document.createElement("a");
    card.classList.add("productos-card");
    card.href = "#";
    
    //Imagen
    let img = document.createElement("img");
    img.classList.add("producto-img");
    img.src = producto.img;
    img.alt = producto.nombre;

    //Nombre
    let nombre = document.createElement("h3");
    nombre.classList.add("producto-nombre")
    nombre.textContent = producto.nombre;

    //Precio
    let precio = document.createElement("p");
    precio.classList.add("producto-precio");
    precio.textContent = `$${producto.precio}`

   
    //Boton Ver Detalles
    let botonDetalles = document.createElement("button");
    botonDetalles.textContent = "Ver Detalles";
    botonDetalles.classList.add("ver-detalles");

    //Boton Agregar al carrito
    let boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    boton.classList.add("agregar-carrito");


    //Agrego elementos a la tarjeta
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(img);
    card.appendChild(botonDetalles);
    card.appendChild(boton);

    //Agrego la tarjeta al contenedor
    container.appendChild(card);
});