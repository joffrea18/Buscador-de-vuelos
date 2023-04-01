import { getVuelos, getAirports } from "./apiController.js";
import consoleText from "./coreEffects.js";

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

//variable para control de intervalo de retardo para el autocomplete
let interval;

//tomamos los inputs del formulario
let inputOriginAirport = document.querySelector("#origin");
let imgLoaderOrigin = document.querySelector("#loaderOrigin");
let inputDestinationAirport = document.querySelector("#destination");
let imgLoaderDestination = document.querySelector("#loaderDestination");
let selectElement = document.querySelector("#classSelector");

//tomamos el boton
let btnElement = document.querySelector("button[type='submit']");
let btnReset = document.querySelector("button[type='reset']");

//tomamos los tooltips del formulario
let ulOriginToolTip = document.querySelector("#originToolTip");
let ulDestinationToolTip = document.querySelector("#destinationToolTip");

//añadimos los listeners necesarios para la búsqueda de aeropuerto
inputOriginAirport.addEventListener("input", originInputHandlers);
inputDestinationAirport.addEventListener("input", destinationInputHandlers);
btnElement.addEventListener("click", clickHandler);
btnReset.addEventListener("click", () => {
  inputOriginAirport.value = "";
  inputDestinationAirport.value = "";
});

async function clickHandler(e) {
  //validar antes los inputs, deben contener un dato válido
  let originAirport = inputOriginAirport.value;
  let destinationAirport = inputDestinationAirport.value;
  //cada intro debe ser una cadena con una coma, separando IATA con NOMBRE DE AEROPUERTO
  //la cadena después de aplicar un array debe tener justo 2 elementos

  if (
    originAirport.split(",").length !== 2 ||
    destinationAirport.split(",").length !== 2
  ) {
    errorHandler(
      "En los cuadros de búsqueda, introduce algún dato y selecciona algún aeropuerto coincidente en la lista mostrada",
      "Dato no válido"
    );
    return;
  }

  let timerInterval;
  Swal.fire({
    title: "¡Buscando tu mejor vuelo!",
    html: "Espera un momento, estamos buscando <strong>el mejor vuelo</strong> para ti para el día de mañana",
    timer: 65000,
    timerProgressBar: true,
    heightAuto: false,
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
      departureDate,
      selectElement.value
    );
    Swal.close();
    console.log(vuelos);
    let vuelosOrdenados = vuelos.data.sort((a, b) => {
      return a.price.grandTotal - b.price.grandTotal;
    });
    console.log(vuelosOrdenados[0]);

    Swal.fire({
      title: "<strong>¡VUELO ENCONTRADO!</strong>",
      width: 800,
      icon: "info",
      heightAuto: false,
      html: `<h2>Hemos encontrado este vuelo para mañana</h2>
      <p><strong>Clase:</strong> ${
        selectElement.options[selectElement.selectedIndex].textContent
      }</p>
      <p><strong>Asientos disponibles:</strong> ${
        vuelosOrdenados[0].numberOfBookableSeats
      }</p>
      <p><strong>Precio por viajero:</strong> ${
        vuelosOrdenados[0].price.grandTotal
      } €</p>
      <p><strong>Duración total:</strong> ${vuelosOrdenados[0].itineraries[0].duration.substring(
        2
      )} ${
        vuelosOrdenados[0].itineraries[0].segments.length > 1
          ? "(incluyendo el tiempo entre trayectos)"
          : ""
      }</p>
      <table class="segmentTable">
      <thead>
      <th>Id trayecto</th>
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
      <section class="sectionSegment">
      ${segmentsSection(vuelosOrdenados[0].itineraries[0].segments)}
      </section>
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

function segmentsSection(arraySegments) {
  let documentFragment = "";
  for (let segment of arraySegments) {
    documentFragment += "<p>";
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
    documentFragment += `Trayecto nº <strong>${segment.id}</strong></p>`;
    documentFragment += `<p>Avión; <strong>${segment.aircraft.code}</strong></p>`;
    documentFragment += `<p>Salida: <strong>${departureDateString}<br/>desde ${
      segment.departure.iataCode
    }${
      segment.departure.terminal !== void 0
        ? "<br/>Terminal " + segment.departure.terminal
        : ""
    }</strong></p>`;
    documentFragment += `<p>Llegada: <strong>${arrivalDateString}</br>hasta ${
      segment.arrival.iataCode
    }${
      segment.arrival.terminal !== void 0
        ? "<br/>Terminal " + segment.arrival.terminal
        : ""
    }</strong></p>`;
    documentFragment += `<p>Vuelo nº: <strong>${segment.carrierCode}-${segment.number}</strong></p>`;
    documentFragment += `<p>Aerolínea: <strong>${segment.carrierCode}</strong></p>`;
    documentFragment += `<p>Duración: <strong>${segment.duration.substring(
      2
    )}</strong></p>`;
  }
  return documentFragment;
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
  //este manejador controla que cuando borramos lo que hayamos introducido debe desaparecer el spinner y el tooltip de ayuda
  clearInterval(interval);
  let targetWidth = e.currentTarget.offsetWidth;
  let originAutocompleteValue = e.target.value;
  if (e.target.value.length < 3) {
    ulOriginToolTip.innerHTML = "";
    ulOriginToolTip.style.display = "none";
    imgLoaderOrigin.style.display = "none";
  } else {
    imgLoaderOrigin.style.display = "block";
    interval = setInterval(() => {
      ulOriginToolTip.style.width = targetWidth + "px";
      showOriginAutocomplete(originAutocompleteValue);
    }, 2000);
  }
}

async function showOriginAutocomplete(value) {
  imgLoaderOrigin.style.display = "inherit";
  clearInterval(interval);
  //llamamos a la api y mostramos resultados en UL
  //mostramos UL pues ahí está el gif de carga
  let airports = await getAirports(value);
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
          inputOriginAirport.value = airportText;
          ulOriginToolTip.style.display = "none";
          inputDestinationAirport.focus();
        });
        liFragment.appendChild(newLi);
      }
      ulOriginToolTip.append(liFragment);
    }
    imgLoaderOrigin.style.display = "none";
  } catch (error) {
    errorHandler(
      "Agradecemos que no uses carácteres raros ni tildes en el cuadro de búsqueda",
      "Dato no válido"
    );
  }
}

function destinationInputHandlers(e) {
  //este manejador controla que cuando borramos lo que hayamos introducido debe desaparecer el spinner y el tooltip de ayuda
  clearInterval(interval);
  let targetWidth = e.currentTarget.offsetWidth;
  let destinationAutocompleteValue = e.target.value;
  if (e.target.value.length < 3) {
    ulDestinationToolTip.innerHTML = "";
    ulDestinationToolTip.style.display = "none";
    imgLoaderDestination.style.display = "none";
  } else {
    imgLoaderDestination.style.display = "block";
    interval = setInterval(() => {
      ulDestinationToolTip.style.width = targetWidth + "px";
      showDestinationAutocomplete(destinationAutocompleteValue);
    }, 2000);
  }
}

async function showDestinationAutocomplete(value) {
  imgLoaderDestination.style.display = "inherit";
  clearInterval(interval);
  //llamamos a la api y mostramos resultados en UL
  //mostramos UL pues ahí está el gif de carga
  let airports = await getAirports(value);
  try {
    if (airports.meta.count === 0) {
      ulDestinationToolTip.style.display = "inherit";
      ulDestinationToolTip.innerHTML = "";
      let newLi = document.createElement("li");
      newLi.innerHTML = "No se encontraron aeropuertos";
      ulDestinationToolTip.append(newLi);
    } else {
      let liFragment = document.createDocumentFragment();
      ulDestinationToolTip.style.display = "inherit";
      ulDestinationToolTip.innerHTML = "";
      for (let airport of airports.data) {
        let newLi = document.createElement("li");
        newLi.innerHTML = `<a href="#"><strong>${airport.iataCode}</strong>, ${airport.name}</a>`;
        newLi.addEventListener("click", (liEvent) => {
          let airportText = liEvent.target.textContent;
          inputDestinationAirport.value = airportText;
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
    errorHandler(
      "Agradecemos que no uses carácteres raros ni tildes en el cuadro de búsqueda",
      "Dato no válido"
    );
  }
}

function errorHandler(text, title) {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    heightAuto: false,
  });
  imgLoaderOrigin.style.display = "none";
  ulOriginToolTip.style.display = "none";
  imgLoaderDestination.style.display = "none";
  ulDestinationToolTip.style.display = "none";
}
