import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const connectedSockets = [];


wss.on('connection', function connection(ws) {
  //ws is the socket of the client
  console.log(`connection from ${ws._socket.remoteAddress}`);
  connectedSockets.push(ws);
  console.log(`clients:  ${connectedSockets}`);
  ws.on('message', 
    
    function message(message) {
      if (message === "quit"){
        console.lo(`client at ${ws._socket.remoteAddress} has quit`);
        ws.close();
        return;
      }
      console.log('received: %s', message);
      ws.send(message)
    }
  );

  ws.send("SERVER: you have connected!")
}); 



