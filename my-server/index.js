const http = require("http");

const fs = require("fs");

const PORT = 80;
const hostname = 'localhost';


const home = fs.readFileSync('./index.html', 'utf-8');

const about = fs.readFileSync('./about.html', 'utf-8');

const contact = fs.readFileSync('./contact.html', 'utf-8');

const error = fs.readFileSync('./error.html', 'utf-8');

const server = http.createServer((req, res) => {


 if (req.url === "/") {
  return res.end(home);
 }


 if (req.url === "/about") {
  return res.end(about);
 }


 if (req.url === "/contact") {
  return res.end(contact);
 }
 else {
  return res.end(error);
 }
})

server.listen(PORT, hostname, () => {
 console.log(`Server is running on port ${PORT} at http://${hostname}:${PORT}`);
})
