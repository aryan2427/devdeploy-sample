const http = require("http");
const port = process.env.PORT || 3000;
const greeting = process.env.GREETING || "(GREETING is not set)";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Hello from DevDeploy! v2</h1><p>GREETING = ${greeting}</p>`);
  })
  .listen(port, () => console.log("Sample app running on port " + port));
