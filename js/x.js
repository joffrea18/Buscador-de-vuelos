"use strict";

let url = `https://test.api.amadeus.com/v1/reference-data/locations`;
fetch(url)
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.log(error));
