const net = require('net');

const server = net.createServer();

server.listen(3000,() => {
  console.log("Server listening on port 3000!");
});

server.on('connection', (client) => {
  console.log('New Client connected');
  client.write('Hello there');
  client.on('data', (data) => {
    client.setEncoding('utf8');
    console.log('Message from client: ', data.toString());
  });
});