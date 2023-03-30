"use strict";
import { getVuelos, getAirports } from "./apiController.js";
import consoleText from "./coreEffects.js";

import { btnSwitch } from "./darkmode.js";

//SOLO PARA TESTING, estas variables no son tomadas en cuenta en producción
let IATAOrigin = "MAD";
let IATADestination = "PAR";
//variables traspasadas a la API junto a los IATA seleccionados por el usuario
let passengers = 1;
let tomorrow = new Date();
//seteamos depatureDate en una fecha de hoy + 1 día con un formato válido para la API (meses y dias de 2 cifras)
tomorrow.setDate(tomorrow.getDate() + 1);
let departureDate = `${tomorrow.getFullYear()}-${(
	"0" +
	(tomorrow.getMonth() + 1)
).slice(-2)}-${("0" + tomorrow.getDate()).slice(-2)}`;

//tomamos los inputs del formulario
let inputOriginAirport = document.querySelector("#origin");
let imgLoaderOrigin = document.querySelector("#loaderOrigin");
let inputDestinationAirport = document.querySelector("#destination");
let imgLoaderDestination = document.querySelector("#loaderDestination");

//tomamos el boton
let btnElement = document.querySelector("button");

//tomamos la sección donde mostraremos el resultado del vuelo encontrado
let sectionElement = document.querySelector("#result");

//tomamos los tooltips del formulario
let ulOriginToolTip = document.querySelector("#originToolTip");
let ulDestinationToolTip = document.querySelector("#destinationToolTip");

//añadimos los listeners necesarios para la búsqueda de aeropuerto
inputOriginAirport.addEventListener("keyup", originChangeHandlers);
inputOriginAirport.addEventListener("input", originInputHandlers);
inputDestinationAirport.addEventListener("keyup", destinationChangeHandlers);
inputDestinationAirport.addEventListener("input", destinationInputHandlers);
btnElement.addEventListener("click", clickHandler);

async function clickHandler(e) {
	e.preventDefault();
	//validar antes los inputs, deben contener un dato válido
	let originAirport = inputOriginAirport.value;
	let destinationAirport = inputDestinationAirport.value;
	sectionElement.style.visible = "none";
	//cada intro debe ser una cadena con una coma, separando IATA con NOMBRE DE AEROPUERTO
	//la cadena después de aplicar un array debe tener justo 2 elementos

	if (
		originAirport.split(",").length !== 2 ||
		destinationAirport.split(",").length !== 2
	) {
		Swal.fire({
			icon: "error",
			title: "Dato no válido",
			text: "En los cuadros de búsqueda, introduce algún dato y selecciona algún aeropuerto coincidente en la lista mostrada",
		});
		return;
	}

	let timerInterval;
	Swal.fire({
		title: "¡Buscando tu mejor vuelo!",
		html: "Espera un momento, estamos buscando <strong>el mejor vuelo</strong> para ti para el día de mañana",
		timer: 65000,
		timerProgressBar: true,
		didOpen: () => {
			Swal.showLoading();
			timerInterval = setInterval(() => {}, 100);
		},
		willClose: () => {
			clearInterval(timerInterval);
		},
	});

	//llamar api de vuelo y coger los vuelos disponibles para 1 persona en el dia justo de mañana
	try {
		let vuelos = await getVuelos(
			originAirport.split(",")[0],
			destinationAirport.split(",")[0],
			passengers,
			departureDate
		);
		Swal.close();
		let vuelosOrdenados = vuelos.data.sort((a, b) => {
			return a - b;
		});
		console.log(vuelosOrdenados[0]);

		Swal.fire({
			title: "<strong>¡VUELO ENCONTRADO!</strong>",
			width: 800,
			icon: "info",
			html: `<h2>Hemos encontrado este vuelo para mañana</h2>
      <p><strong>Asientos disponibles:</strong> ${
				vuelosOrdenados[0].numberOfBookableSeats
			}</p>
      <p><strong>Precio por viajero:</strong> ${
				vuelosOrdenados[0].price.grandTotal
			} €</p>
      <p><strong>Duración total:</strong> ${vuelosOrdenados[0].itineraries[0].duration.substring(
				2
			)}</p>
      <table class="segmentTable">
      <thead>
      <th>Id Segmento</th>
      <th>Avión</th>
      <th>Salida</th>
      <th>Llegada</th>
      <th>Vuelo nº</th>
      <th>Aerolínea</th>
      <th>Duración</th>
      </thead>
      <tbody>
      ${segments(vuelosOrdenados[0].itineraries[0].segments)}
      </tbody>
      </table>
      `,
			focusConfirm: false,
			confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Me lo quedo!',
		});
	} catch (error) {
		Swal.close();
		Swal.fire({
			icon: "error",
			title: "Algo fue mal",
			text: "Parece que no hay vuelos disponibles para este origen/destino",
		});
	}
}

function segments(arraySegments) {
	let documentFragment = "";
	for (let segment of arraySegments) {
		documentFragment += "<tr>";
		let departureDate = new Date(segment.departure.at);
		let arrivalDate = new Date(segment.arrival.at);
		let departureDateString = `${departureDate.getDate()}/${
			departureDate.getMonth() + 1
		}/${departureDate.getFullYear()} ${departureDate.getHours()}:${(
			"0" + departureDate.getMinutes()
		).slice(-2)}`;
		let arrivalDateString = `${arrivalDate.getDate()}/${
			arrivalDate.getMonth() + 1
		}/${arrivalDate.getFullYear()} ${arrivalDate.getHours()}:${(
			"0" + arrivalDate.getMinutes()
		).slice(-2)}`;
		documentFragment += `<td>${segment.id}</td>`;
		documentFragment += `<td>${segment.aircraft.code}</td>`;
		documentFragment += `<td>${departureDateString}<br/>desde ${
			segment.departure.iataCode
		}${
			segment.departure.terminal !== void 0
				? "<br/>Terminal " + segment.departure.terminal
				: ""
		}</td>`;
		documentFragment += `<td>${arrivalDateString}</br>hasta ${
			segment.arrival.iataCode
		}${
			segment.arrival.terminal !== void 0
				? "<br/>Terminal " + segment.arrival.terminal
				: ""
		}</td>`;
		documentFragment += `<td>${segment.carrierCode}-${segment.number}</td>`;
		documentFragment += `<td>${segment.carrierCode}</td>`;
		documentFragment += `<td>${segment.duration.substring(2)}</td></tr>`;
	}
	return documentFragment;
}

function originInputHandlers(e) {
	e.preventDefault();
	//este manejador controla que cuando borramos lo que hayamos introducido debe desaparecer el spinner y el tooltip de ayuda
	if (e.target.value.length < 3) {
		ulOriginToolTip.innerHTML = "";
		ulOriginToolTip.style.display = "none";
		imgLoaderOrigin.style.display = "none";
	}
}

// Introducimos un tiempo de retraso en la respuesta cuando se ejecuta la función
async function originChangeHandlers(e) {
	e.preventDefault();
	//este manejador controla la petición a la API para devolver uno o varios aeropuertos que puedan coincidir
	//con lo que hayamos escrito y mostrará un tooltip de ayuda para poder seleccionar correctamente un aeropuerto
	//también lleva un manejo de errores por si falla la petición o la introducción no es admitida por la API
	let airports = await getAirports(e.target.value);
	window.setInterval(() => {
		if (e.key === "Enter") {
			if (e.target.value.length >= 3) {
				let targetWidth = e.currentTarget.offsetWidth;
				ulOriginToolTip.style.width = targetWidth + "px";
				imgLoaderOrigin.style.display = "inherit";
				//llamamos a la api y mostramos resultados en UL
				//mostramos UL pues ahí está el gif de carga
				try {
					if (airports.meta.count === 0) {
						ulOriginToolTip.style.display = "inherit";
						ulOriginToolTip.innerHTML = "";
						let newLi = document.createElement("li");
						newLi.innerHTML = "No se encontraron aeropuertos";
						ulOriginToolTip.append(newLi);
					} else {
						let liFragment = document.createDocumentFragment();
						ulOriginToolTip.style.display = "inherit";
						ulOriginToolTip.innerHTML = "";
						for (let airport of airports.data) {
							let newLi = document.createElement("li");
							newLi.innerHTML = `<a href="#"><strong>${airport.iataCode}</strong>, ${airport.name}</a>`;
							newLi.addEventListener("click", (liEvent) => {
								let airportText = liEvent.target.textContent;
								e.target.value = airportText;
								ulOriginToolTip.style.display = "none";
								inputDestinationAirport.focus();
							});
							liFragment.appendChild(newLi);
						}
						ulOriginToolTip.append(liFragment);
					}
					imgLoaderOrigin.style.display = "none";
				} catch (error) {
					//mostramos error usando la librería sweetAlert2
					Swal.fire({
						icon: "error",
						title: "Dato no válido",
						text: "Agradecemos que no uses carácteres raros ni tildes en el cuadro de búsqueda",
					});
					imgLoaderOrigin.style.display = "none";
					ulOriginToolTip.style.display = "none";
				}
			}
		}
	}, 3000);
}

function destinationInputHandlers(e) {
	e.preventDefault();
	//este manejador controla que cuando borramos lo que hayamos introducido debe desaparecer el spinner y el tooltip de ayuda
	if (e.target.value.length < 3) {
		ulDestinationToolTip.innerHTML = "";
		ulDestinationToolTip.style.display = "none";
		imgLoaderDestination.style.display = "none";
	}
}

// Introducimos un tiempo de retraso en la respuesta cuando se ejecuta la función
async function destinationChangeHandlers(e) {
	e.preventDefault();
	//este manejador controla la petición a la API para devolver uno o varios aeropuertos que puedan coincidir
	//con lo que hayamos escrito y mostrará un tooltip de ayuda para poder seleccionar correctamente un aeropuerto
	//también lleva un manejo de errores por si falla la petición o la introducción no es admitida por la API
	let airports = await getAirports(e.target.value);
	window.setInterval(() => {
		if (e.key === "Enter") {
			if (e.target.value.length >= 3) {
				let targetWidth = e.currentTarget.offsetWidth;
				ulDestinationToolTip.style.width = targetWidth + "px";
				imgLoaderDestination.style.display = "inherit";
				//llamamos a la api y mostramos resultados en UL
				//mostramos UL pues ahí está el gif de carga
				try {
					if (airports.meta.count === 0) {
						ulDestinationToolTip.style.display = "block";
						ulDestinationToolTip.innerHTML = "";
						let newLi = document.createElement("li");
						newLi.innerHTML = "No se encontraron aeropuertos";
						ulDestinationToolTip.append(newLi);
					} else {
						let liFragment = document.createDocumentFragment();
						ulDestinationToolTip.style.display = "block";
						ulDestinationToolTip.innerHTML = "";
						for (let airport of airports.data) {
							let newLi = document.createElement("li");
							newLi.innerHTML = `<a href="#"><strong>${airport.iataCode}</strong>, ${airport.name}</a>`;
							newLi.addEventListener("click", (liEvent) => {
								let airportText = liEvent.target.textContent;
								e.target.value = airportText;
								ulDestinationToolTip.style.display = "none";
								btnElement.focus();
							});
							liFragment.appendChild(newLi);
						}
						ulDestinationToolTip.append(liFragment);
					}
					imgLoaderDestination.style.display = "none";
				} catch (error) {
					//mostramos error usando la librería sweetAlert2
					Swal.fire({
						icon: "error",
						title: "Dato no válido",
						text: "Agradecemos que no uses carácteres raros ni tildes en el cuadro de búsqueda",
					});
					imgLoaderDestination.style.display = "none";
					ulDestinationToolTip.style.display = "none";
				}
			}
		}
	}, 3000);
}
