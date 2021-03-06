const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
  if (req.url === "/api/pippo") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(4000);

console.log("listening on 4000...");

server.on("connection", e => {
  console.log("new connection");
});
