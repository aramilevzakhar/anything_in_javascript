/*
 * my trash coe
*/



const funcs = require("./funcs.js");


line = "   100 200      3 5 6 999    ";




arr_s = funcs.f_split(line);
arr_n = funcs.f_map(arr_s);
arr_f = funcs.f_filter(arr_n);
sum = funcs.f_sum(arr_f);

console.log(sum);

