const fs = require("fs");
const _ = require("lodash");

let rawdata = fs.readFileSync("colors.json");
let colors = JSON.parse(rawdata);

// colors.map(x => {})
// _.zipObject()
/*
colors = colors.map(x => { 
	return {'color': Object.keys(x)[0], 'rgb': Object.values(x)[0]};
});
*/


colors = colors.map(x => _.zipObject(['color', 'rgb'], [Object.keys(x)[0], Object.values(x)[0].slice(0, 3)]))
colors = _.sortBy(colors, ['color']);
console.log(colors);