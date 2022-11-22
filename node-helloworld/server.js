const express = require('express');

const hostName = '0.0.0.0';
const port = 8080;

const server = express();
server.get("/",(req, res) => {
  res.send("Hello World!")
})

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});