//Node server which will handle socket io connections
const io = require('socket.io')(8000, {
    cors: {
        origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
    }
})

const users = {};

//new-user-joined, user-joined, send, recieve are just like variables

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    });


    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id]
    });


})