const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors:{
    origin:'*'
  }
});

// const app = require('express')() //in elegant wat
// const server = require('http').createServer(app)
// const io = require('socket.io')(server)

// io.on("connection", (socket) => {
//   console.log('user connected');
//   socket.on("message", (data) => {//gets the data from the client
//     console.log(`Message recieved on server: ${data.message} from ${data.useName}` );
//     io.emit("message", data); //rockets the data to the others client
//   });
// });

io.on("connection", socket => {
  console.log('user connected');
  socket.on("message", (data) => {//gets the data from the client
    console.log(`Message recieved on server: ${data.message} from ${data.useName}` );  
    io.emit("message", data); //rockets the data to the others client
  });
});

// io.on("connection", (socket) => {
//   console.log('user connected');
//   socket.on("join", (data) => {//gets the data from the client
//     console.log(`Message recieved on server: ${data.message} from ${data.useName}` );  
//     socket.join(data.room)
//     io.to(data.room).emit("message", data); //rockets the data to the others client
//   });
// });




server.listen(5050, function () {
  console.log("listening on port 5050");
});
