// Create web server
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');
  // Set the response body
  res.write('<h1>Hello World</h1>');
  // End the response
  res.end();
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// Run the file using `node comment.js` and open http://localhost:3000 in your browser.
// You will see `Hello World` in the browser.

