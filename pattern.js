// Apply patterns

var pattern_ap = function(list) {
	var flag = 1;
	var a = list[0];
	var d = list[1]-list[0];
	for(var i=2; i< list.length; i++) {
		num = parseInt(a) + i*d;
  		if(list[i] != num) {
   			flag = 0;
   		}
	}
	return flag;
}

var pattern_fibonacci = function(list) {
	var flag = 1;
	var a = 5 * Math.pow(list[0],2) + 4;
	var b = 5 * Math.pow(list[0],2) - 4;
	if( (Math.sqrt(a) - Math.ceil(Math.sqrt(a)) == 0) || (Math.sqrt(b) - Math.ceil(Math.sqrt(b)) == 0) ) {
		for(var i=2; i< list.length; i++) {
			if(list[i] != list[i-1] + list[i-2]){
				flag = 0;
			}
		}
	}
	return flag;
}

patterns = [pattern_ap];
//list = [1,2,3,4,6];
//console.log(patterns.length);

var apply_patterns = function(list) {
	//console.log("list" + list);
	for (var index=0; index < patterns.length; index++) {
		//console.log(index + "pat" + patterns[index](list));
  		if (patterns[index](list)) {
			return 1;
		}
		else {
			return 0;
		}
	}
}

exports.apply_patterns = apply_patterns;
