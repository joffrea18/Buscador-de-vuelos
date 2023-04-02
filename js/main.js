import { getVuelos } from "./apiController.js";
import { mostrarSaludo, txtWellcome } from "./layoutController.js";
import { inputCodeOrigin, inputCodeDestination } from "./autocomplete.js";

//variables para el asistente de inicio
let pasoAsistente;
let confirmText ;
let htmlStep;
let title;

mostrarSaludo("any","FlyWithMe!");
setInterval(()=>{
  mostrarSaludo("any",txtWellcome[Math.floor(Math.random()*15)]);
},2500)

resetAsistente();
showHelp();

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
let inputDestinationAirport = document.querySelector("#destination");
let selectElement = document.querySelector("#classSelector");

//tomamos los botones
let btnElement = document.querySelector("button[type='submit']");
let btnReset = document.querySelector("button[type='reset']");
let btnHelp = document.querySelector("#help");

//tomamos los tooltips del formulario y los exportamos para tratarlos en el módulo "autocomplete";
export let ulOriginToolTip = document.querySelector("#originToolTip");
export let ulDestinationToolTip = document.querySelector("#destinationToolTip");

//añadimos los listeners necesarios para la búsqueda de aeropuerto y validación de formulario y otros botones
inputOriginAirport.addEventListener("input", inputCodeOrigin);
inputDestinationAirport.addEventListener("input", inputCodeDestination);
btnElement.addEventListener("click", clickHandler);
btnHelp.addEventListener("click",showHelp);
btnReset.addEventListener("click", () => {
  inputOriginAirport.value = "";
  inputDestinationAirport.value = "";
});

function showHelp()
{

  Swal.fire({
    title: title,
    heightAuto: false,
    html: htmlStep,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      confirmText,
    cancelButtonText:
      'Cerrar',
    
  }).then((botonPulsado) =>{
    if(botonPulsado.isConfirmed)
    {
      switch (pasoAsistente)
      {
        case 1:
        title="Selecciona origen y destino";
        htmlStep = '<div class="mainHelp">' +
        '<img class="asistImg" style="width:250px;" src="./img/inputGif.gif" />' +
        '<section><p style="text-align:left;">Selecciona tanto en Aeropuerto de Origen como en Aeropuerto de destino.<br/>Para ello, puedes buscar por IATA, ciudad, nombre de aeropuerto, pais, etc... ¡Siéntete libre de explorar el mundo!</p></section>' +
        '</div>';
        pasoAsistente++;
        showHelp();
        break;
        case 2:
        title="Elige entre los aeropuertos disponibles";
        htmlStep = '<div class="mainHelp">' +
        '<img class="asistImg" style="width:250px;" src="./img/autocomplete.gif" />' +
        '<section><p style="text-align:left;">Mientras buscas, verás unos resultados en un cuadro de ayuda bajo el texto, selecciona el aeropuerto correcto haciendo click sobre él</p></section>' +
        '</div>';
        pasoAsistente++;
        showHelp();
        break;
        case 3:
        title="¡Encuentra tu vuelo!";
        htmlStep = '<div class="mainHelp">' +
        '<img class="asistImg" style="width:250px;" src="./img/button.webp" />' +
        '<section><p style="text-align:left;">Una vez que tienes claro desde donde sales y a donde quieres ir, pulsa en <strong>Buscar Vuelo</strong> para que nuestra maquinaria se ponga en marcha<br/><br/>Si todo ha ido bien, verás el mejor vuelo para la clase elegida, con información sobre sus escalas, tiempos de tránsito, terminales de salida y llegadas, precio por pasajero, avión, número de vuelo y aerolínea, ¿no te parece maravilloso?</p></section>' +
        '</div>';
        pasoAsistente=0;
        confirmText = "¡Quiero probarlo!"
        showHelp();
        break;
        default:
         resetAsistente();
      }
    }
    else
    {
      resetAsistente();
    }
  })
}

function resetAsistente()
{
  pasoAsistente=1;
  confirmText = "Siguiente >>";
  htmlStep = '<div class="mainHelp">' +
  '<img class="azafata" style="width: 180px;" src="./img/azafata.jpg" />' +
  '<section><p style="text-align:left;">Te damos la bienvenida a nuestra fántástica app para poder buscar un vuelo express para una persona en el día de mañana<br/><br/>Con esta pequeña ayuda aprenderás a usar nuestra APP, ¡verás que fácil!</p></section>' +
  '</div>';
  title="Bienvenid@ a <strong>FlyWithMe</strong>";
}

async function clickHandler(e) {
  e.preventDefault();
  //validar antes los inputs, deben contener un dato válido
  let originAirport = inputOriginAirport.value;
  let destinationAirport = inputDestinationAirport.value;
  //Cada input debe tener una cadena seleccionada en los tooltips, la condicion es que su elemento 0 tras hacerle
  //el split sea un IATA de 3 caracteres
  
  if (
    originAirport.split(",")[0].length !== 3 ||
    destinationAirport.split(",")[0].length !== 3
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
    documentFragment += '<section class="segmentsSectionItem"><p>';
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
    )}</strong></p></section>`;
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

export function errorHandler(text, title) {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    heightAuto: false,
  });
  ulOriginToolTip.style.display = "none";
  ulDestinationToolTip.style.display = "none";
}
