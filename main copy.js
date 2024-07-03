import WebSocket from 'ws';

const ws = new WebSocket('wss://cors-anywhere-pnd9.onrender.com');

ws.on('open', () => {
  console.log('Connected to server');
  ws.send('Hello, server!');
});

ws.on('message', (message) => {
  console.log(`Received message from server: ${message}`);
});

ws.on('close', () => {
  console.log('Disconnected from server');
});