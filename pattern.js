// Arithematic progression

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

// Fibonaci pattern

var pattern_fibonacci = function(list) {
	var flag = 1;
	for(var i=2; i< list.length; i++) {
		if(list[i] != list[i-1] + list[i-2]){
			flag = 0;
		}
	}
	return flag;
}

// Pattern match on buffer
var apply_patterns= function(list, callback) {
		process.nextTick(function() {
			callback( pattern_fibonacci(list) + pattern_ap(list) ); 
		});
}

// Export the method for import
exports.apply_patterns = apply_patterns;
