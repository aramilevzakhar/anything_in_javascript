// 1 

const _ = require("lodash");
const fs = require("fs");

let rawdata = fs.readFileSync("colors.json");
// console.log(rawdata);
let colors = JSON.parse(rawdata);
// console.log(colors);
// console.log()

// console.log(colors);
colors = colors.filter(x => Object.keys(x)[0].length <= 6)

// _.sortBy(colors, [''])
// console.log(colors);

colors = _.sortBy(colors, [x => Object.keys(x)[0]])
	.map(x => Object.keys(x)[0]);
console.log(colors);

// console.log(jsFile);