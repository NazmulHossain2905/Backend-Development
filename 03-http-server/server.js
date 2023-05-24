const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("<h1>Hello</h1>");
  res.end();
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
