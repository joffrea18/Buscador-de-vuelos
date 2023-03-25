"use strict";

let formElements = document.querySelector("form");
formElements = document.forms[0];
// formElements = document.forms.

// Debo sustituir el origin que hay por el origin con el placeholder
// con la información de lo extraido en el json

// const handleSubmit = (event1) => {

// 	console.log("prueba");
// };

const handleSubmit1 = (event1) => {
	event1.preventDefault();
	let origin = document.getElementById("origin").value;
	// console.log(origin);
	// Esto modificar con el método que me hace aparecer la info en la pantalla
	// Como meter un innerHTML acá

	alert(origin);
};

// utilizar el main con la función de captura del evento del button

export { handleSubmit1 };
