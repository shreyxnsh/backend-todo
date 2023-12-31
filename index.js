// starting point of nodejs

// to get everything which is mentioned in the app folder.
const app = require('./app');
const http = require('http').createServer(app).listen(8000);
const db = require('./config/database');
const userModel = require('./model/user.model');
const todoModel = require('./model/todo.model');


//create a port for the server
const port = 3000;

// get request for route
app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.listen(port, ()=>{
    console.log('Server Listening on port http://localhost:' + port);

});