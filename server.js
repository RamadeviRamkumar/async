const http = require('http');

console.log('Hello..'); // f1

function sync() {
  console.log('step 1'); // f3
  console.log('step 2'); // f4
  console.log('step 3'); // f5
}

sync(); // f2

let a = 100;
let b = 20;
let c = a + b;

setTimeout(() => console.log('step1'), 4000); // f6
setTimeout(() => console.log('step2'), 2000); // f7
setTimeout(() => console.log('step3'), 1000); // f8

console.log('bye'); // f9

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from the server!\n');
});

// Listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});

// Keep the server running with setInterval
setInterval(() => {}, 1000);
