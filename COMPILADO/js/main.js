"use strict";
import { handleSubmit1 } from "./event";
import { addInfo } from "./info";

const client_id = "g5ud3lQxVTpkTrWMkbA1yh2B9Rns46Zs";
const client_secret = "nxcF93niDa57JEHL";
let tokenRequest;
let token;
let IATAOrigin = "PAR";
let IATADestination = "MAD";

async function getToken() {
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

getToken();

async function getVuelos(sToken, IATAOrigin, IATADestination) {
	try {
		let response = fetch(
			`https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${IATAOrigin}&maxPrice=200`,
			{
				headers: {
					Authorization: `Bearer ${sToken}`,
				},
			}
		);
		let data = (await response).json();
		return data;
	} catch (error) {
		console.error("ERROR:", error.message);
	}
}

async function main() {
	tokenRequest = await getToken();
	token = tokenRequest.access_token;
	let vuelos = await getVuelos(token, IATAOrigin, IATADestination);
	console.log(vuelos);
}

main();

// var Amadeus = require("amadeus");

// let flySearch = new Amadeus({
//   clientId: "g5ud3lQxVTpkTrWMkbA1yh2B9Rns46Zs",
//   clientSecret: "nxcF93niDa57JEHL",
// });

// flySearch.shopping.flightOffersSearch
//   .get({
//     originLocationCode: "SYD",
//     destinationLocationCode: "BKK",
//     departureDate: "2023-03-26",
//     adults: "2",
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (responseError) {
//     console.log(responseError.code);
//   });
