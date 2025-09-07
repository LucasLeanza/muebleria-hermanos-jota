import { actualizarCarrito } from "./cartHelper.js"; 

const cont = document.getElementById("carrito-container");
const totalDiv = document.getElementById("total-carrito");

document.addEventListener("DOMContentLoaded", () => {
  renderCarrito();
  actualizarCarrito();
});

function renderCarrito() {
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  cont.innerHTML = "";

  if (!cart.length) {
    cont.textContent = "El carrito está vacío";
    if (totalDiv) totalDiv.textContent = "";
    return;
  }

  cart.forEach((p, index) => {
    const li = document.createElement("li");
    li.className = "carrito-item";

    // Imagen
    const img = document.createElement("img");
    img.src = p.imagen;
    img.alt = p.nombre;

    // Nombre + descripción
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";
    infoDiv.innerHTML = `
      <span class="nombre">${p.nombre}</span>
      <span class="descripcion">${p.descripcion || ""}</span>
    `;

    // Cantidad
    const cantidadDiv = document.createElement("div");
    cantidadDiv.className = "cantidad";

    const btnMenos = document.createElement("button");
    btnMenos.textContent = "-";

    const spanCantidad = document.createElement("span");
    spanCantidad.textContent = p.cantidad;

    const btnMas = document.createElement("button");
    btnMas.textContent = "+";

    cantidadDiv.append(btnMenos, spanCantidad, btnMas);

    // Precio
    const spanPrecio = document.createElement("span");
    spanPrecio.className = "precio";
    spanPrecio.textContent = `$${p.precio * p.cantidad}`;

    // Botón eliminar
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.className = "btn-eliminar";

    const cpDiv = document.createElement("div");
    cpDiv.className = "cantidad-precio";
    cpDiv.append(cantidadDiv, spanPrecio, btnBorrar);

    li.append(img, infoDiv, cpDiv);
    cont.appendChild(li);

    // Eventos
    btnMas.addEventListener("click", () => {
      p.cantidad++;
      actualizarCarritoLocal(cart);
    });

    btnMenos.addEventListener("click", () => {
      if (p.cantidad > 1) {
        p.cantidad--;
      } else {
        cart.splice(index, 1);
      }
      actualizarCarritoLocal(cart);
    });

    btnBorrar.addEventListener("click", () => {
      cart.splice(index, 1);
      actualizarCarritoLocal(cart);
    });
  });

  actualizarTotal(cart);
}

function actualizarCarritoLocal(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCarrito();
  actualizarCarrito();
}

function actualizarTotal(cart) {
  const total = cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  if (totalDiv) totalDiv.textContent = `Total: $${total}`;
}