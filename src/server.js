const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("canal1", (arg) => {
    console.log(`canal1: ${arg}`);
});

socket.on("canal2", (arg) => {
    console.log(`canal2: ${arg}`);
});


