document
  .getElementById("contacto")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // El id del formulario es contacto, añado funcion event para evitar que se envíe y recargue la página

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let resultado = document.getElementById("resultado");
    let boton = document.getElementById("botonEnviar");

    // Cambio el color del botón al enviar
    boton.style.color = "grey";

    // Validar nombre (solo letras y espacios)
    let nombreValido = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/.test(nombre);

    // Validar email (formato correcto)
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Validar mensaje (máximo 200 caracteres)
    let mensajeValido = mensaje.length > 0 && mensaje.length <= 200;

    if (!nombreValido) {
      resultado.textContent =
        "El nombre solo puede contener letras y espacios.";
      resultado.style.color = "red";
    } else if (!emailValido) {
      resultado.textContent = "El correo que ha ingresado no es válido.";
      resultado.style.color = "red";
    } else if (!mensajeValido) {
      resultado.textContent = "El mensaje debe tener entre 1 y 200 caracteres.";
      resultado.style.color = "red";
    } else {
      resultado.textContent = "Mensaje enviado correctamente.";
      resultado.style.color = "green";
    }
  });
