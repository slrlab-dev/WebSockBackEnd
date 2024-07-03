import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {

  wss.on('message', 
    function message(data) {
      console.log('received: %s', data);
      ws.send(data)
    }
  );

  ws.send("SERVER: you have connected!")
}); 



