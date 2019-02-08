var net = require('net');

var HOST = '127.0.0.2';
var PORT = 6969;

var ans = 2;
net.createServer(function(sock) {
  var i = 0;
  
  console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   
  sock.on('data', function(data) {
    
    if (i == 0) {
      sock.write('OK');
    }
    else if (i===5){
      sock.write('END')
      sock.destroy();
    } 
    else {
      if (data == ans) {
        sock.write('BINGO');
        sock.destroy();
      } 
      else {
        sock.write('WRONG');
      }
    }
    i++;
    
  });

  sock.on('close', function(data) {
    console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
  });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);