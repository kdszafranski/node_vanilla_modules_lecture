var theta = require('./theta');
var message = require('./message');

var helloMessage = function(){
    return message() + theta();
};

module.exports = helloMessage;
