"use strict";

//Utilizamos un fichero JSON para importar TODOS los aeropuertos del mundo, que usaremos para el autocomplete
let codAirports = [];
fetch("../airports.json").then((res) => res.json()).then((data) => {
    codAirports = data;
})

export { codAirports };
