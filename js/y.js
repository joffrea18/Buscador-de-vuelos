"use strict";
import { codAirports } from "./bbdd";


async function inputAirOrigin(e) {
e.preventDefault();
let codairpots = await 

}


// ################################################################
// ################################################################
// ############ ESTA LA DESARROLLÉ YO A VER QUE TAL ###############
// ##################### PERO FATAL ###############################

// let airportO = document
autocompleteOriginAirport.addEventListener("keydown", function (e) {
	// Prevengo el default
	e.preventDefault();
	// Hago la extracción del objeto en el Array
	let h = codAirports[i].cod + " " + codAirports[i].airport;
	// Aquí estoy intentando que me devuelva el valor ingresado en el teclado
	let autocompleteOriginAirport = document.getElementById("#origin").value;
	// Aquí intento decirle que para i igual a ese valor
	for (let i = autocompleteOriginAirport; i < codAirports.length; i++) {
		// Si cumple la condición
		if (autocompleteOriginAirport == codAirports.cod) {
			return h.getAttribute("origin");
		} else {
			// Si no es igual retornar mensaje de error
			result = `Indique un Aeropuerto Internacional válido`;
			let error = new Error(result);
			throw error;
		}
	}
	// autocompleteOriginAirport.children;
});

// ################################################################
// ################################################################

// for (let i = 0; i < codAirports.length; i++) {
// 	// Imprimo los cód de los airports como string para imprimir en interfaz
// 	let h = codAirports[i].cod + " " + codAirports[i].airport;
// 	console.log(h);
// 	// Hasta aquí imprime bien pero todos.
// }
