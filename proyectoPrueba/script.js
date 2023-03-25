"use strict";

function mostrarSaludo(idioma, mensaje) {
  document.getElementById("saludo").innerHTML = mensaje;
  console.log(mensaje);
}

setTimeout(function () {
  mostrarSaludo("español", "¡Bienvenido!");
}, 2000);

setTimeout(function () {
  mostrarSaludo("inglés", "Welcome!");
}, 4000);

setTimeout(function () {
  mostrarSaludo("italiano", "Benvenuto!");
}, 6000);

setTimeout(function () {
  mostrarSaludo("frances", "Accueillir!");
}, 8000);

setTimeout(function () {}, 10000);

setTimeout(function () {
  document.getElementById("saludo").style.display = "none";
}, 10000);
