// console.log("Starting...");

const http = require('http');
const htmlResponses = require('./htmlResponses.js');
const cssResponses = require('./cssResponses.js');
const contentResponses = require('./contentResponses.js');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// const indexPage = 
const indexPath = "../client/client.html";

const onRequest = (request, response) =>
{
	console.log(request.url);
	switch (request.url) {
		case "/success":
			contentResponses.getSuccess(request, response);
			break;
		case "/badRequest":
			contentResponses.getBadRequest(request, response);
			break;
		case "/unauthorized":
			
			break;
		case "/forbidden":
			
			break;
		case "/internal":
			
			break;
		case "/notImplemented":
			
			break;
		case "/style.css":
			cssResponses.getIndexStyles(request, response);
			break;
		case "/":
			htmlResponses.getIndex(request, response);
			break;
		// case "/client.js":
		// 	htmlResponses.getIndex(request, response);
		// 	break;
		default:
			// TODO: 404 error
			break;
	}
};

console.log("Server starting up...");

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1:${port}`);
