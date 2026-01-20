const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("DevOps Pipeline Working after webhook add\n");
});

server.listen(3000, () => {
  console.log("App running on port 3000");
});

