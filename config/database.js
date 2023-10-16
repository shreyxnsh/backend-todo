const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017').on('open', ()=>{
    console.log('MongoDB Connected');
}).on('error', ()=>{
    console.log('MongoDb connection error');
});
module.exports = connection;