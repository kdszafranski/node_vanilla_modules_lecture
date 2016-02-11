var sum = function(x,y){
    var number = x + y;
    number = number.toString();
    return number;
};

var diff = function(x,y){
    var number = x - y;
    number = number.toString();
    return number;
};

var multi = function(x,y){
    var number = x * y;
    number = number.toString();
    return number;
};

exports.sum = sum;
exports.diff = diff;