import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  wss.send('you have connected!');
}); 

wss.on('message', function message(data) {
  //reflect data
  console.log('received: %s', data);
  wss.send(data);
});
