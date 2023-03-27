"use strict";

// FUNCION SALUDO

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

setTimeout(function () {
  mostrarSaludo("español", "FlyWithMe");
}, 10000);

setTimeout(function () {
  mostrarSaludo("español", "FlyWithMe");
}, 12000);

// DIA/NOCHE

const buttonDark = document.querySelector("#dark");
const form = document.querySelector("form");
const labels = document.querySelectorAll("label.dia");
const elementsWithDayClass = document.querySelectorAll(".day");

buttonDark.addEventListener("click", () => {
  form.classList.toggle("day");
  labels.forEach((label) => {
    label.classList.toggle("dia");
  });
  elementsWithDayClass.forEach((element) => {
    element.classList.toggle("day");
  });
});

// FUNCION PARA CAMBIAR LA CLASE DAY EN EL FORM

buttonDark.addEventListener("click", () => {
  form.classList.toggle("day");
  if (form.classList.contains("day")) {
    body.style.backgroundColor = "#fff";
  } else {
    body.style.backgroundColor = "#f6f6f6";
  }
});
