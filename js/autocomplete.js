"use strict";
//AUTOCOMPLETE MODULE por JOFFREY
import { codAirports } from "./bbdd.js";
import { errorHandler, ulDestinationToolTip as idDestinationToolTip, ulDestinationToolTip, ulOriginToolTip as idOriginToolTip } from "./main.js";

export function inputCodeOrigin(e) {
	let resultados = [];
	let h = "";
	let cadBusca = e.target.value.toLowerCase();
	//el UL debe posicionarse correctamente en cada búsqueda, esto evitará que su tamaño y posición sean erróneos cuando el usuario cambia de tamaño el viewport
	let targetWidth = e.currentTarget.offsetWidth;
	let targetTop = e.currentTarget.offsetTop;
	let targetHeight = e.currentTarget.offsetHeight;
	idOriginToolTip.style.width = targetWidth+"px";
	idOriginToolTip.style.top = (targetTop+targetHeight)+"px";

	for (let j = 0; j < codAirports.length; j++) {
		if (
			codAirports[j].cod.toLowerCase() === cadBusca ||
			codAirports[j].name.toLowerCase().indexOf(cadBusca) !== -1 ||
			codAirports[j].city.toLowerCase().indexOf(cadBusca) !== -1 ||
			codAirports[j].country.toLowerCase().indexOf(cadBusca) !== -1
		) {
			h = codAirports[j].cod + "," + codAirports[j].name + ","+codAirports[j].state+","+codAirports[j].country;
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
					idOriginToolTip.style.display = "none";
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
		errorHandler(`Introduzca un código de aeropuerto váido\n${error.message}`,"Error");
	}
}

export function inputCodeDestination(e) {
	let resultados = [];
	let h = "";
	let cadBusca = e.target.value.toLowerCase();
	//el UL debe posicionarse correctamente en cada búsqueda, esto evitará que su tamaño y posición sean erróneos cuando el usuario cambia de tamaño el viewport
	let targetWidth = e.currentTarget.offsetWidth;
	let targetTop = e.currentTarget.offsetTop;
	let targetHeight = e.currentTarget.offsetHeight;
	idDestinationToolTip.style.width = targetWidth+"px";
	idDestinationToolTip.style.top = (targetTop+targetHeight)+"px";
	for (let j = 0; j < codAirports.length; j++) {
		if (
			codAirports[j].cod.toLowerCase() === cadBusca ||
			codAirports[j].name.toLowerCase().indexOf(cadBusca) !== -1 ||
			codAirports[j].city.toLowerCase().indexOf(cadBusca) !== -1 ||
			codAirports[j].country.toLowerCase().indexOf(cadBusca) !== -1
		) {
			h = codAirports[j].cod + "," + codAirports[j].name + ","+codAirports[j].state+","+codAirports[j].country;
			resultados.push(h);
		}
	}
	try {
		if (e.target.value.length === 0) {
			// Seteo la UL a cadena vacía
			idDestinationToolTip.innerHTML = "";
			// Le indico al UL que desaparezca
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
					// Tras hacer click, el UL desaparece
					idDestinationToolTip.style.display = "none";
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
		errorHandler(`Introduzca un código de aeropuerto váido\n${error.message}`,"Error");
	}
}


