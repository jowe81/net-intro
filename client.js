const net = require('net');
const conn = net.createConnection({
  host: '127.0.0.1',
  port: 3000,
});

conn.setEncoding('utf-8');

conn.on('data', (data) => {
  console.log('Server says: ', data);
  conn.write('Hello back there, server!');
});