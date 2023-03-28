"use strict";

// Con esto debo guardar los datos en el array.

const inputOrigin = {
	origin: [],
	destination: [],
};

const addInfo = (origin, destination) => {
	inputOrigin.origin.push(origin);
	inputOrigin.destination.push(destination);
};

// export default inputOrigin;
// export { addInfo };

function autocomplete(inp, arr) {
	// La función toma dos argumentos, el texto y el array donde cogerá los elementos
	var currentFocus;
	// Ejecutamos la función cuando alguien escribe
	inp.addEventListener("input", function (e) {
		var a,
			b,
			i,
			val = this.value;
		// Cerramos cualquier lista que haya en el value del li
		closeAllLists();
		if (!val) {
			return false;
		}
		currentFocus = -1;
		// Creamos un div con que contengan los items values
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		// Agregamos con la append un hijo para el autocompletado
		this.parentNode.appendChild(a);
		// Buscamos el item en el array ####
		for (i = 0; i < arr.length; i++) {
			// Checkeamos si las letras corresponden con los values
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				// Creamos un DIV que para ir match los elementos
				b = document.createElement("DIV");
				// Se hacen las letras negrita.
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				// Agregamos un input donde se agregará los datos evaluados.
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				// Se ejecuta la función para cuando se hace click en el DIV
				b.addEventListener("click", function (e) {
					// Insertamos el value para el autocompletado del texto
					inp.value = this.getElementsByTagName("input")[0].value;
					/// Cerramos cualquier lista que  pueda estarse ejecutando
					// para el autocompletado
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});
	// Ejecutamos la función del Keyboard
	inp.addEventListener("keydown", function (e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			// Si se descarga la Keys se aumenta el focus
			currentFocus++;
			// Se hace el ítem más visible
			addActive(x);
		} else if (e.keyCode == 38) {
			//up
			// En caso contrario se decrese el focus
			currentFocus--;
			// Se hace le ítem más visible
			addActive(x);
		} else if (e.keyCode == 13) {
			// Si el enter está presionado aplicamos el preventDefault
			e.preventDefault();
			if (currentFocus > -1) {
				// Simulamos un click en el ítem
				if (x) x[currentFocus].click();
			}
		}
	});
	function addActive(x) {
		// La función de clasificar se activa
		if (!x) return false;
		// Se remueven todo los "active" de todas las clases
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = x.length - 1;
		// Se agrega la class "autocomplete-active":
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		// Función para remover la clase "active"  ###### Preguntar acá
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
		// Se cierran todos los autocompletados excepto el que está
		// pasando los argumentos
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	// Se ejecuta la función cada vez que se hace click en el documento
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}
