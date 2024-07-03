import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  send('you have connected');
}); 

wss.on('message', 
  function message(data) {
    console.log('received: %s', data);
    send(data);
  }
);


async function send(data){
  console.log('sending: %s', data);
  await wss.send(data);
} 
