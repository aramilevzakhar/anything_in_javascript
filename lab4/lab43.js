const fs = require("fs");
const _ = require("lodash");
let rawData = fs.readFileSync("users.json");
let users = JSON.parse(rawData);

// users = users.filter(x => x.address.geo);


users = users.filter(x => x.address.geo.lat[0] == '-')
	.map(x => _.zipObject(['username', 'city'], [x.username, x.address.city]));
// users = _.sortBy(users, ['city']).reverse();
users = _.orderBy(users, ['city'], ['desc']);

console.log(users);
