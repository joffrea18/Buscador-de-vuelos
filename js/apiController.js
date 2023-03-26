"use strict";
//Controlador para obtención de datos API - (c) 2023 by HAB A-TEAM
//contantes que guardan los datos de credenciales de acceso
const client_id = "g5ud3lQxVTpkTrWMkbA1yh2B9Rns46Zs";
const client_secret = "nxcF93niDa57JEHL";
let tokenRequest;
let token;

async function getToken() {
  //esta función recupera un token válido para cada petición a cualquiera de las apis
  try {
    let response = fetch(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
      }
    );
    let data = (await response).json();
    return data;
  } catch (error) {
    console.error("ERROR:", error.message);
  }
}

export async function getVuelos(
  IATAOrigin,
  IATADestination,
  passengers,
  departureDate
) {
  //función encargada de recuperar los vuelos según los parámetros dados desde le módulo main
  try {
    tokenRequest = await getToken();
    token = tokenRequest.access_token;
    let travelers = [];
    // los viajeros (travelers) es un array de objetos con índice variable
    for (let i = 1; i <= passengers; i++) {
      travelers.push({
        id: i,
        travelerType: "ADULT",
      });
    }
    // esto es una petición de API en método POST, por lo que hay que pasar un body como parámetro, este body
    // debe pasarse como un JSON válido, por eso usamos JSON.stringify()
    let reqBody = JSON.stringify({
      currencyCode: "EUR",
      originDestinations: [
        {
          id: "1",
          originLocationCode: IATAOrigin,
          destinationLocationCode: IATADestination,
          departureDateTimeRange: {
            date: departureDate,
            time: "06:00:00",
          },
        },
      ],
      travelers: travelers,
      sources: ["GDS"],
      searchCriteria: {
        maxFlightOffers: 10,
        flightFilters: {
          cabinRestrictions: [
            {
              cabin: "BUSINESS",
              coverage: "MOST_SEGMENTS",
              originDestinationIds: ["1"],
            },
          ],
        },
      },
    });

    //capturamos en variable response la respuesta del servidor cuando llamamos a la API pasando las cabeceras
    //y body correctos
    let response = fetch(
      `https://test.api.amadeus.com/v2/shopping/flight-offers`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/vnd.amadeus+json",
        },
        body: reqBody,
      }
    );
    let data = (await response).json();
    //Return data response from server
    return data;
  } catch (error) {
    console.error("ERROR:", error.message);
  }
}

export async function getAirports(searchString) {
  //Esta función recuperará de la API de aeropuertos el nombre del mismo según un dato buscado, la API devuelve
  //tanto nombre de aeropuerto como su código IATA, necesario para buscar vuelos.
  tokenRequest = await getToken();
  token = tokenRequest.access_token;
  //llamamos a la API y esperamos respuesta
  let response = fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${searchString}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let data = (await response).json();
  //return response from server that will handled by main module
  return data;
}
