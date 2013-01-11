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



var pattern_fibonacci = function(list) {
	var flag = 1;
	for(var i=2; i< list.length; i++) {
		if(parseInt(list[i]) != parseInt(list[i-1]) + parseInt(list[i-2])){
			flag = 0;
		}
	}
	return flag;
}

var pattern_pat1 = function(list) {
        var flag = 1;
        if(list[0] != list[1] + list[2] + list[3] + list[4]) {
                flag = 0;
        }
                return flag;
}


var results = 0;

function async(arg, callback) {
	  results = results || arg;
	  process.nextTick(function() { callback(arg); }, 100);
}

var items = [pattern_gp, pattern_ap, pattern_fibonacci, pattern_pat1];

function apply_patterns(list) {
	var result = 0;
	var x = 0;
	items.forEach (function(item) {
  	  	async(item(list), function callback(error,result){
		})
	});
	x= results;
	results = 0;
	return (x); 
}
	

exports.apply_patterns = apply_patterns;
