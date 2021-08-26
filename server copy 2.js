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

io.on("connection", (socket) => {
  socket.on("message", ({userName,message}) => {
    console.log(`Message recieved on server: ${message} from ${userName}`);
    io.emit("message", {userName,message});
  });
});

server.listen(5050, function () {
  console.log("listening on port 5050");
});
