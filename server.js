//requiring http module from node
const http = require('http');

//define the port we will be listening to (any requests on
//this port will be handled by our server)

const PORT = 8080

// this is our request handler functions, right now any requests
// will come through this function
function handleRequest(request, response) {
	response.end('It Works!! Path Hit: ' + request.url)
}

//Create a server
// this function uses built in http function called create server and sends
// it a callback function as an argument (our very own handleRequest function)
var server = http.createServer(handleRequest);

// Booting up the server here

server.listen(PORT, function() {
	console.log("server listening on: http://localhost:%s", PORT);
})
