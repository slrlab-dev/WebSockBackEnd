import WebSocket from 'ws';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const ws = new WebSocket('wss://cors-anywhere-pnd9.onrender.com');

ws.on('message', (message) => {
  console.log(`Received message from server: ${message}`);
  getAndSend();
});

ws.on('close', () => {
  console.log('Disconnected from server');
});

ws.on('open', () => {
  console.log("CLIENT: you have connected!");
});

function getAndSend(){
  let message = prompt(">");
  ws.send(message);
}







