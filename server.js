const { createServer } = require('node:http'); //import thu vien
const hostname = '127.0.0.1'; //localhost
const port = 3000; //cong lang nghe sever

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>NodeJS-Bai1</h1>');
  res.write('<br>');
  res.write('Le Manh Cuong PH51095');
  res.write(`<h1>HTML5 noidung-1</h1>
    <h2>HTML5 noidung-2</h2>
    <h3>HTML5 noidung-3</h3>`)
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
