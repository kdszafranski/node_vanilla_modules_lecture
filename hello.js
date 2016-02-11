var iota = require('./iota');
var message = require('./message');

var helloMessage = function(){
    return message() + iota();
};

module.exports = helloMessage;