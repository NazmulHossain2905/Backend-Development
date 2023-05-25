const http = require("http");
const fs = require("fs");
const PORT = 4000;

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, statusMessage, htmlFilePath) => {
    fs.readFile(htmlFilePath, (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(statusCode, statusMessage, {
          "Content-Type": "text/html",
        });
        res.write(data);
        res.end();
      }
    });
  };

  switch (req.url) {
    case "/":
      handleReadFile(200, "Successful", "./views/home.html");
      break;
    case "/about":
      handleReadFile(200, "Successful", "./views/about.html");
      break;
    case "/contact":
      handleReadFile(200, "Successful", "./views/contact.html");
      break;
    default:
      handleReadFile(404, "Not found", "./views/error.html");
  }

  //   if (req.url === "/") {
  //     handleReadFile(200, "Successful", "./views/home.html");
  //   } else if (req.url === "/about") {
  //     handleReadFile(200, "Successful", "./views/about.html");
  //   } else if (req.url === "/contact") {
  //     handleReadFile(200, "Successful", "./views/contact.html");
  //   } else {
  //     handleReadFile(404, "Not found", "./views/error.html");
  //   }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
