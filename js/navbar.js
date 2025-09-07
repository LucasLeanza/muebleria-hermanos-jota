document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

import { actualizarCarrito } from "./cartHelper.js";

document.addEventListener("DOMContentLoaded", () => {
  actualizarCarrito(); // asegura que el contador se pinte al entrar a cualquier vista
});