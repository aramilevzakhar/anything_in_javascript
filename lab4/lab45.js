// const _ = require("lodash");
// let rawData = fs.readFileSync("clients.json");
// let users = JSON.parse(rawData).clients;


const _ = require("lodash");
const rawdata = require("./data.js");



data = _.sortBy(_.zip(rawdata.colors, rawdata.argb))
console.log(data)
/*
	.map(x => {
		x[1] = "#" + x[1].slice(0, 3)
			.map(x => x.toString(16))
			.join("");
		return _.zipObject(['color', 'hex_name'], x);
	}), ['color']);
console.log(data);
*/




