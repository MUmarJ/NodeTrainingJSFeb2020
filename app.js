// const http = require("http");
const http = require("http");
const httpDispatcher = require("httpdispatcher");
const { getFileName, readFile } = require("./utils/helpers");

const dispatcher = new httpDispatcher();

const logger = (request, response) => {
  try {
    console.log(request.url);
    dispatcher.dispatch(request, response);
  } catch (err) {
    console.log(err);
  }
};

const server = http.createServer(logger);

dispatcher.onGet("/", async function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  var fileName = await getFileName(".txt");
  var text = readFile(`${fileName}`);
  res.end(text);
});

server.listen(8000);
