"use strict";
import { codAirports } from "./bbdd";

let idOriginToolTip = document.querySelector("#originToolTip");
let idDestinationToolTip = document.querySelector("#destinationToolTip");

function inputCodeDestination(e) {
	window.setInterval(() => {
		// la condición de que el evento capturado sea igual al valor del keys del objeto en el array
		if (e.key == codAirports[i].cod) {
			try {
				// la condición de que si ese array devuelto cumple con:
				if (e.target.value.length === 0) {
					let h = codAirports[i].cod + " " + codAirports[i].airport;
					// Creo un Li para agregar los resultados
					let autocompLi = document.createElement("li");
					autocompLi.innerHTML = `${h}`;
					// Agrego
					idDestinationToolTip.append(autocompLi);
				} else {
					// Es como mi espacio reservado en el DOM para lo que mostraré
					let autocompLi1 = e.createDocumentFragment();
					for (let codAirports1 of codAirports) {
						// Declaro donde crearé el elemento
						let li1 = document.createElement("li");
						// Se muestra en el viewport
						li1.innerHTML = `<a href="#"><strong>${codAirports1.h}</strong></a>`;
						// Agregamos el evento que vamos a capturar
						li1.addEventListener("keydown", (liE) => {
							// Var donde almaceno el texto
							let codAirportsText = liE.target.textContent;
							// Aquí estaríamos evaluando la condición de que se reciba el dato del evento e
							e.target.value = codAirportsText(codAirports.cod); // Tengo la duda si es así o así codAirports.codText
							// Enfoco al ul
							idDestinationToolTip.focus();
						});
						// Agregamos un hijo al li en el fragmento de documento que habíamos reservado anteriormente
						autocompLi1.appenChild(li1);
					}
				}
			} catch (error) {
				let result = "Introduzca un código de aeropuerto váido";
				// let error = new Error(result);
				// throw error;
				return result;
			}

			console.log(e);
		}
	}, 1000);
}

function inputCodeOrigin(e) {
	window.setInterval(() => {
		// la condición de que el evento capturado sea igual al valor del keys del objeto en el array
		if (e.key == codAirports[i].cod) {
			try {
				// la condición de que si ese array devuelto cumple con:
				if (e.target.value.length === 0) {
					let h = codAirports[i].cod + " " + codAirports[i].airport; // Esto quizás lo puedo declarar una sola vez arriba fuera de las funciones
					// Creo un Li para agregar los resultados
					let autocompLi = document.createElement("li");
					autocompLi.innerHTML = `${h}`;
					// Agrego
					idOriginToolTip.append(autocompLi);
				} else {
					// Es como mi espacio reservado en el DOM para lo que mostraré
					let autocompLi1 = e.createDocumentFragment();
					for (let codAirports1 of codAirports) {
						// Declaro donde crearé el elemento
						let li1 = document.createElement("li");
						// Se muestra en el viewport
						li1.innerHTML = `<a href="#"><strong>${codAirports1.h}</strong></a>`;
						// Agregamos el evento que vamos a capturar
						li1.addEventListener("keydown", (liE) => {
							// Var donde almaceno el texto
							let codAirportsText = liE.target.textContent;
							// Aquí estaríamos evaluando la condición de que se reciba el dato del evento e
							e.target.value = codAirportsText(codAirports.cod); // Tengo la duda si es así o así codAirports.codText
							// Enfoco al ul
							idOriginToolTip.focus();
						});
						// Agregamos un hijo al li en el fragmento de documento que habíamos reservado anteriormente
						autocompLi1.appenChild(li1);
					}
				}
			} catch (error) {
				let result = "Introduzca un código de aeropuerto váido";
				// let error = new Error(result);
				// throw error;
				return result;
			}

			console.log(e);
		}
	}, 1000);
}

// ################################################################
// ################################################################
// ############ ESTA LA DESARROLLÉ YO A VER QUE TAL ###############
// ##################### PERO FATAL ###############################

// let airportO = document
// autocompleteOriginAirport.addEventListener("keydown", function (e) {
// 	// Prevengo el default
// 	e.preventDefault();
// 	// Hago la extracción del objeto en el Array
// 	let h = codAirports[i].cod + " " + codAirports[i].airport;
// 	// Aquí estoy intentando que me devuelva el valor ingresado en el teclado
// 	let autocompleteOriginAirport = document.getElementById("#origin").value;
// 	// Aquí intento decirle que para i igual a ese valor
// 	for (let i = autocompleteOriginAirport; i < codAirports.length; i++) {
// 		// Si cumple la condición
// 		if (autocompleteOriginAirport == codAirports.cod) {
// 			return h.getAttribute("origin");
// 		} else {
// 			// Si no es igual retornar mensaje de error
// 			result = `Indique un Aeropuerto Internacional válido`;
// 			let error = new Error(result);
// 			throw error;
// 		}
// 	}
// 	// autocompleteOriginAirport.children;
// });

// ################################################################
// ################################################################

// for (let i = 0; i < codAirports.length; i++) {
// 	// Imprimo los cód de los airports como string para imprimir en interfaz
// 	let h = codAirports[i].cod + " " + codAirports[i].airport;
// 	console.log(h);
// 	// Hasta aquí imprime bien pero todos.
// }

// ##############################################################
// ##############################################################
// ############### LLAMADO A LA API DEL READMY ##############

// amadeus.referenceData.urls.checkinLinks.get({
// 	airlineCode: 'BA'
//   }).then(function(response){
// 	console.log(response.body);   //=> Response del body
// 	console.log(response.result); //=> The fully parsed result
// 	console.log(response.data);   //=> The data attribute taken from the result
//   }).catch(function(error){
// 	console.log(error.response); //=> The response object with (un)parsed data
// 	console.log(error.response.request); //=> The details of the request made
// 	console.log(error.code); //=> A unique error code to identify the type of error
//   });
