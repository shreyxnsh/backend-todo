// starting point of nodejs

// to get everything which is mentioned in the app folder.
const app = require('./app');
const db = require('./config/database');


//create a port for the server
const port = 3000;

// get request for route
app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.listen(port, ()=>{
    console.log('Server Listening on port http://localhost:' + port);

});