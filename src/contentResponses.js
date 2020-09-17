const statCode = {
	200: "OK",
	400: "Bad Request",
	401: "Unauthorized",
	403: "Forbidden",
	404: "Not Found",
	500: "Internal Server Error",
	"OK": 200,
	"Bad Request": 400,
	"Unauthorized": 401,
	"Forbidden": 403,
	"Not Found": 404,
	"Internal Server Error": 500
}

const getJSONOutput = (message, id = undefined) => `{"message": "${message}${(id) ? `", "id": "${id}"` : ""}}`;
const getXMLOutput = (message, id = undefined) => `<response><message>${message}</message>${(id) ? `<id>${id}</id>` : ""}</response>`;//) => `<response><message>${message}</message></response>`;
const successMessage = "This is a successful response.";
const badRequestMessage = "Missing valid query parameter set to true";
const unauthorizedMessage = "Missing logged in query parameter set to yes.";

const getQueries = (url) =>
{
	
};

// const funcCallObj = {
// 	getBadRequest: ()
// };

const respond = (request, response, content, type = "application/json", status = 200) =>
{
	response.writeHead(status, {
		'Content-Type': type
	});
	response.write(content);
	response.end();
};

const getSuccess = (request, response) =>
{
	(request.headers["accept"] == "text/xml") ? 
		respond(request, response, getXMLOutput(successMessage), "text/xml", 200) : 
		respond(request, response, getJSONOutput(successMessage)/*, "text/xml", 200*/);
};

const getBadRequest = (request, response) =>
{
	(request.headers["accept"] == "text/xml") ? 
		respond(request, response, getXMLOutput(badRequestMessage, statCode[400]), "text/xml", 400) : 
		respond(request, response, getJSONOutput(badRequestMessage, statCode[400]), "application/json", 400);
};

const getUnauthorized = (request, response) =>
{
	(request.headers["accept"] == "text/xml") ? 
		respond(request, response, getXMLOutput(unauthorizedMessage, statCode[401]), "text/xml", 401) : 
		respond(request, response, getJSONOutput(unauthorizedMessage, statCode[401]), "application/json", 401);
};

module.exports = {
	getSuccess,
	getBadRequest,
	getUnauthorized
};