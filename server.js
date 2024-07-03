import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log("connection!");
  
  ws.on('message', 
    function message(message) {
      console.log('received: %s', message);
      ws.send(message)
    }
  );

  ws.send("SERVER: you have connected!")
}); 



