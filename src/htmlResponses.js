const fs = require('fs');

const indexPage = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response) =>
{
	response.writeHead(200, {
		"Content-Type": "text/html",
		"Access-Control-Allow-Origin": "*"
	});
	response.write(indexPage);
	response.end();
};

module.exports = {
	getIndex
};