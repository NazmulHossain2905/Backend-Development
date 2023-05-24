const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("<h1>Welcome to the server</h1>");
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
