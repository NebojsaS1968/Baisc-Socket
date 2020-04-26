const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = 3000
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/server.html')
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) =>{
        io.emit('chat message', msg)
    })
  })

http.listen(port, () => {
  console.log('listening on *:3000');
})