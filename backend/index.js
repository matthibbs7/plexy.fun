const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); // Add this
const leaveRoom = require('./utils/leaveRoom');

app.use(cors()); // Add cors middleware

const server = http.createServer(app);

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
});

let chatRoom = ''; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room


// store canvas grids, custom grids will be inserted/removed from this object
let grids = {
    'picasso': {
        grid: [[]]
    },
    'vangogh': {
        grid: [[]]
    }, 
    'davinci': {
        grid: [[]]
    }
}

// Listen for when the client connects via socket.io-client
io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);
  
    // Add a user to a room
    socket.on('join_room', (data) => {
        const { username, room } = data; // Data sent from client when join_room event emitted
        socket.join(room); // Join the user to a socket room
        
        let __createdtime__ = Date.now(); // Current timestamp
        // Send message to all users currently in the room, apart from the user that just joined
        socket.to(room).emit('receive_message', {
        message: `${username} has joined the chat room`,
        username: 'SirFartsAlot',
        __createdtime__,
        });

         // send welcome msg to new user only
        socket.emit('new_join', grids[room].grid);

        chatRoom = room;
        allUsers.push({ id: socket.id, username, room });
        chatRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit('chatroom_users', chatRoomUsers);
        socket.emit('chatroom_users', chatRoomUsers);

    });


    // #############################
    // #   PIXEL DRAWN
    // #############################

    // data is:
    // [index, color]
    socket.on('pixel_drawn', (data) => {
        const { new_grid, room } = data;
        io.in(room).emit('receive_pixel', data)

        grids[room].grid = [...new_grid]
        console.log('server received pixel')

    })


    // #############################
    // #   REMOVE USER FROM ROOM
    // #############################

    socket.on('leave_room', (data) => {
        const { username, room } = data;
        socket.leave(room);
        const __createdtime__ = Date.now();
        // Remove user from memory
        allUsers = leaveRoom(socket.id, allUsers);
        socket.to(room).emit('chatroom_users', allUsers);
        socket.to(room).emit('receive_message', {
          username: 'SirFarts',
          message: `${username} has left the chat`,
          __createdtime__,
        });
        console.log(`${username} has left the chat`);
    });

    // or when they disconnect (dont press leave manually)

    socket.on('disconnect', () => {
        console.log('User disconnected from the chat');
        const user = allUsers.find((user) => user.id == socket.id);
        if (user?.username) {
          allUsers = leaveRoom(socket.id, allUsers);
          socket.to(chatRoom).emit('chatroom_users', allUsers);
          socket.to(chatRoom).emit('receive_message', {
            message: `${user.username} has disconnected from the chat.`,
          });
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

server.listen(5050, () => 'Server is running on port 5000');