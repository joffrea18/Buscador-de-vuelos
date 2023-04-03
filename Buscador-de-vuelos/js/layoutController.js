"use strict";

// FUNCION SALUDO

export const txtWellcome = [
  "bienvenido!",
  "wellcome!",
  "benvenuto!!",
  "bem-vindo!",
  "受欢迎的!",
  "bienvenu!",
  "willkommen!",
  "喜ばしい!",
  "환영받는!",
  "dobrodošli!",
  "vítejte!",
  "velkommen!",
  "bun venit!",
  "tervetuloa!",
  "ยินดีต้อนรับ!",
  "hoş geldiniz!",
];


export function mostrarSaludo(idioma, mensaje) {
  document.getElementById("saludo").innerHTML = mensaje;
}

//FOOTER DESLIZANTE


// DIA/NOCHE

const buttonDark = document.querySelector("#dark");
const form = document.querySelector("form");
const labels = document.querySelectorAll("label.dia");
const elementsWithDayClass = document.querySelectorAll(".day");
const seleccionarImagen = document.querySelector("#dark>img");

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
    form.style.backgroundColor = "#fff";
  } else {
    form.style.backgroundColor = "#333";
  }
});

// FUNCION PARA CAMBIAR LA IMAGEN DEL BOTON

buttonDark.addEventListener("click", () => {
  if (
    seleccionarImagen.getAttribute("src") ===
    "./img/luna.png"
  ) {
    seleccionarImagen.setAttribute("src", "./img/sol.png");
  } else {
    seleccionarImagen.setAttribute("src", "./img/luna.png");
  }
});
