const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3003;

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

var data = fs.readFileSync('data.json');
var myObject= JSON.parse(data);



const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('connected', socket.client.id);
    console.log( socket.client.conn.server.clientsCount + " users connected" );
    getUsersConnected(socket);
})

const getUsersConnected = socket => {
    const response = socket.client.conn.server.clientsCount;
    socket.emit("FromAPI", response);
};
let tickets = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/buy', (req, res) => {

    let newData = [12,32,14];
    myObject.push(newData);
    var newData2 = JSON.stringify(myObject);
    fs.writeFile('data.json', newData2, err => {
        // error checking
        if(err) throw err;
    
    console.log("New data added");
});   
});

server.listen(port, function() {
    console.log('listening on localhost:' + port);
});