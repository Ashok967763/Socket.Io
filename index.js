var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// io.emit('some event', { for: 'everyone' });

// io.on('connection', function(socket){
//   console.log("-------->user connected")
//    socket.emit('hiesrgth');
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

var nsp = io.of('/my-namespace');
nsp.on('connection',function(socket){
  console.log('someone connected');
});
nsp.emit('hi','everyone!');

http.listen(3000, function(){
  console.log('listening on *:3000');
});
