"use strict";

const inputOrigin = {
	origin: [],
	destination: [],
};

const addInfo = (origin, destination) => {
	inputOrigin.origin.push(origin);
	inputOrigin.destination.push(destination);
};

export default inputOrigin;
export { addInfo };
