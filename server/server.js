const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'mke@example.com',
    //     text: 'Hey. Whats going on',
    //     createAt: 123
    // });

    socket.emit('newMessage', {
        from: 'romi',
        text: 'Hey. Rocky'
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    })
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

app.use(express.static(publicPath));

server.listen(port,() => {
    console.log(`Server is up on port ${port}`);
});