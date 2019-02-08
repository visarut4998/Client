var net = require('net');
var HOST = '127.0.0.2';
var PORT = 6969;
var client = new net.Socket();

var num = 2


client.connect(PORT, HOST, function() {
	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
	client.write('5835512092');
});


client.on('data', function(data) {
	console.log(data.toString())
	if(data == 'OK'){
		client.write('' + num)
	}
	else if(data == 'WRONG'){
		client.write('' + num)
	}
	else if(data == 'BINGO'){
		client.destroy()
	}
	else if(data == 'END'){
		
		connect()
		client.destroy()
	}
	console.log(num);
	num++
	
})

connect=()=> {
client.connect(PORT, HOST, function() {
	console.log('error');
	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
	client.write('5835512092');
	})
}


// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});