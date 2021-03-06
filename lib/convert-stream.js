var through = require('through');
var convert = require('./convert');

module.exports = function(sheetName){
	var buffer = [];
	return through(function(data){
		buffer.push(data);
	}, function(){
		this.queue(convert(Buffer.concat(buffer).toString('utf8'), sheetName));
		this.queue(null);
	});
};