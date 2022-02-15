const fs = require("fs");
const _ = require("lodash");
let rawData = fs.readFileSync("clients.json");
let users = JSON.parse(rawData).clients;

// console.log(users.clients);
users = users.filter(x => x.address.city == "Кунгур");
users = _.orderBy(users, ['gender', 'age', 'name'], ['asc', 'desc', 'asc']);

print("hello ")





console.log(users);
