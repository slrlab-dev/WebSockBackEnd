import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.send('you have connected!');
}); 

ws.on('message', function message(data) {
  //reflect data
  console.log('received: %s', data);
  ws.send(data);
});
