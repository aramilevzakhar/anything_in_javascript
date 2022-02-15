
/*
arr_s = f_split(line);
arr_n = f_map(arr_s);
arr_f = f_filter(arr_n);
sum = f_sum(arr_f);
console.log(sum);
*/


module.exports.f_split = function(line) {
	tmp = "";
	arr = [];
	for (i = 0; i < line.length; i++) {
		if (line[i] == " ") {
			if (tmp != "") arr.push(tmp);
			tmp = "";
		} else {
			tmp += line[i];

		}

	}
	if (tmp != "") arr.push(tmp)
	return arr;

}

module.exports.f_map = function (arr_s) {
	for(i = 0; i < arr_s.length; i++) {
		arr_s[i] = Number(arr_s[i]);

	}
	return arr_s;

}



module.exports.f_filter = function(arr_n) {
	sum_number = 0;
	arr = [];
	for (i = 0; i < arr_n.length; i++) {
		if (arr_n[i] % 2 != 0) {
			arr.push(arr_n[i]);
		}

	}
	return arr;

}

module.exports.f_sum = function (arr_f) {
	result = 0;
	for (i = 0; i < arr_f.length; i++) {
		result += arr_f[i];
	}
	return result;

}







