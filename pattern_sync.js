// Apply patterns

var pattern_ap = function(list) {
	var flag = 1;
	var a = list[0];
	var d = list[1]-list[0];
	for(var i=2; i< list.length; i++) {
		num = parseInt(a) + i* parseInt(d);
  		if(list[i] != num) {
   			flag = 0;
   		}
	}
	return flag;
}

var pattern_fibonacci = function(list) {
	var flag = 1;
	for(var i=2; i< list.length; i++) {
		if(parseInt(list[i]) != parseInt(list[i-1]) + parseInt(list[i-2])){
			flag = 0;
		}
	}
	return flag;
}

var pattern_gp = function(list) {
        var flag = 1;
        var a = list[0];
        var r = (list[1]/list[0]);
        for(var i=2; i< list.length; i++) {
                num = parseInt(a) * Math.pow(parseInt(r),i);
                if(list[i] != num) {
                        flag = 0;
                }
        }
        return flag;
}




function apply_patterns(list) {
	return (pattern_fibonacci(list) || pattern_ap(list) || pattern_gp(list)) ;
}

exports.apply_patterns = apply_patterns;
