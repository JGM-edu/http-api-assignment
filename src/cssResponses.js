const fs = require('fs');

const indexStyles = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndexStyles = (request, response) =>
{
	response.writeHead(200, { 
		"Content-Type": "text/css",
		"Access-Control-Allow-Origin": "*"
	});
	response.write(indexStyles);
	response.end();
};

module.exports = {
	getIndexStyles
};