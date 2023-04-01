"use strict";
import { codAirports } from "./bbdd.js";

let idOriginToolTip = document.querySelector("#originToolTip");
let idDestinationToolTip = document.querySelector("#destinationToolTip");

idOriginToolTip.addEventListener("keyup", inputCodeDestination);
idDestinationToolTip.addEventListener("keyup", inputCodeOrigin);

// Los inputs
let inputDestination = document.querySelector("#destination");
let inputOrigin = document.querySelector("#origin");

inputDestination.addEventListener("input", inputCodeDestination);
inputOrigin.addEventListener("input", inputCodeOrigin);

function inputCodeDestination(e) {
	// console.log(e);
	// aquí almacenamos lo recibido
	let resultados = [];
	let h = "";
	for (let j = 0; j < codAirports.length; j++) {
		// Igualo la condición a el value del objeto del array que le corresponda
		// Pasamos el indexOf para modificar el resultado devuelto
		if (
			codAirports[j].cod === e.target.value ||
			codAirports[j].airport.indexOf(e.target.value) > 0
		) {
			h = codAirports[j].cod + "," + codAirports[j].airport;

			resultados.push(h);
		}
	}
	try {
		// la condición de que si ese array devuelto cumple con:

		if (e.target.value.length === 0) {
			// console.log("Algo");
			// Devuelvo la ul vacía
			idDestinationToolTip.innerHTML = "";
			// Le indico que no quiero que aparezca
			idDestinationToolTip.style.display = "none";
		}
		if (e.target.value.length >= 3) {
			// Reservo mi espacio en el DOM para lo que mostraré
			idDestinationToolTip.innerHTML = "";
			let liFragment = document.createDocumentFragment();
			// Le paso un for que me recorra el array vacío y lo agrego
			for (let resultado of resultados) {
				// Declaro donde crearé el elemento
				let li1 = document.createElement("li");
				// Se muestra en el viewport
				li1.innerHTML = `<a href="#"><strong>${resultado}</strong></a>`;
				// Agregamos el evento que vamos a capturar
				li1.addEventListener("click", (liE) => {
					// Var donde almaceno el texto
					let codAirportsText = liE.target.textContent;
					// Aquí estaríamos evaluando la condición de que se reciba el dato del evento e
					e.target.value = codAirportsText;
				});
				// Devuelvo el elemento creado
				liFragment.appendChild(li1);
			}
			// Sólo para objetos HTML
			idDestinationToolTip.append(liFragment);
			if (resultados.length > 0) {
				// Muestro el li oculto
				idDestinationToolTip.style.display = "block";
			} else {
				// Borro el cuadro rojo
				idDestinationToolTip.style.display = "none";
			}
		}
	} catch (error) {
		let result = "Introduzca un código de aeropuerto váido";
		return result;
	}
}

function inputCodeOrigin(e) {
	let resultados = [];
	let h = "";
	for (let j = 0; j < codAirports.length; j++) {
		if (
			codAirports[j].cod === e.target.value ||
			codAirports[j].airport.indexOf(e.target.value) > 0
		) {
			h = codAirports[j].cod + "," + codAirports[j].airport;

			resultados.push(h);
		}
	}

	try {
		if (e.target.value.length === 0) {
			idOriginToolTip.innerHTML = "";

			idOriginToolTip.style.display = "none";
		}
		if (e.target.value.length >= 3) {
			idOriginToolTip.innerHTML = "";
			let liFragment = document.createDocumentFragment();

			for (let resultado of resultados) {
				let li1 = document.createElement("li");

				li1.innerHTML = `<a href="#"><strong>${resultado}</strong></a>`;

				li1.addEventListener("click", (liE) => {
					let codAirportsText = liE.target.textContent;

					e.target.value = codAirportsText;
				});

				liFragment.appendChild(li1);
			}

			idOriginToolTip.append(liFragment);
			if (resultados.length > 0) {
				idOriginToolTip.style.display = "block";
			} else {
				idOriginToolTip.style.display = "none";
			}
		}
	} catch (error) {
		let result = "Introduzca un código de aeropuerto váido";

		return result;
	}
}
