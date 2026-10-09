const http = require("http");
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello from DevDeploy!</h1><p>This app was deployed automatically.</p>");
  })
  .listen(port, () => console.log("Sample app running on port " + port));
