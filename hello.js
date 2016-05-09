var mu = require('./mu');
var message = require('./message');

var helloMessage = function(){
    return message() + mu();
};

module.exports = helloMessage;
