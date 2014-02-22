/*
	thermostat
	a node.js app to communicate between a serial thermostat device
	and a web client version of the same. 
	requires:
		* node.js (http://nodejs.org/)
		* express.js (http://expressjs.com/)
		* socket.io (http://socket.io/#how-to-use)
		* serialport.js (https://github.com/voodootikigod/node-serialport)
		
	based on the core examples for socket.io and serialport.js
		
	created 21 Jan 2014
	by Tom Igoe

*/


	


var serialport = require("serialport"),		// include the serialport library
	SerialPort  = serialport.SerialPort,	   // make a local instance of serial
	express = require('express'),				   // make an instance of express
	open = require('open'),                   // used to open the browser
	url = 'http://localhost:8080';            // URL to open in the browser
 
var app = express(),								      // start Express framework
   server = require('http').createServer(app);	// start an HTTP server 	

// set up static folders for client-side JavaScript and CSS:
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

// third word of the command line is serial port name:
var portName = process.argv[2];				  
// print out the port you're listening on:
console.log("opening serial port: " + portName);	

// listen for incoming requests on the server:
server.listen(8080);								         
console.log("Listening for new clients on port 8080");
// open the app in a browser:
open(url);                   

// open the serial port:
var myPort = new SerialPort(portName, { 
	// look for return and newline at the end of each data packet:
	parser: serialport.parsers.readline("\r\n") 
});
  
// respond to web GET requests with the index.html page:
app.get('/', function (request, response) {
  response.sendfile(__dirname + '/index.html');
});


// take anything that begins with /output:
app.get('/output/*', function (request, response) {
  // the route is the first parameter of the URL request:
  var blindCommand = request.params[0];  
  console.log("received "+ blindCommand);

  // send it out the serial port:
  myPort.write(blindCommand);
  // send an HTTP header to the client:
  response.writeHead(200, {'Content-Type': 'text/html'});
  // send the data and close the connection:
  response.end(blindCommand);
});


