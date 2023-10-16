const mongoose = require('mongoose');
const db = require('../config/database');

// create user schema
const{Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    }
});

const userModal = db.model('user', userSchema);

module.exports = userModal;