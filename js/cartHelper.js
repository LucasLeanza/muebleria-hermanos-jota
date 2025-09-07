// Actualiza el contador de productos en el carrito del nav
export function actualizarCarrito() {
    //Obtener carrito desde sessionStorage, si no hay nada usamos arreglo vacio
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    //Sumar todas las cantidades de los productos
    const count = cart.reduce((acc, p) => acc + p.cantidad, 0);

    //Obtener el span donde mostramos la cantidad en el nav
    const span = document.getElementById("cart-count");

    //Actualizar solo el texto del span, de forma segura
    if (span) span.textContent = count;
}

//Agregar un producto al carrito
export function agregarAlCarrito(producto) {
    //Obtener carrito actual o arreglo vacio
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Verificar si el producto ya existe en el carrito
    const existente = cart.find(p => p.id === producto.id);

    if (existente) {
        // Si ya existe, solo aumentamos la cantidad
        existente.cantidad++;
    }
    else {
        // Si no existe, lo agregamos con cantidad 1
        cart.push({ ...producto, cantidad: 1 });
    }

    // Guardar carrito actualizado en sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));

    // Actualizar contador en el nav
    actualizarCarrito();
}