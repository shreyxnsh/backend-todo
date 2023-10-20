const mongoose = require('mongoose');
// creating an object of user model so that we can identify the todo belongs to which user
const userModel = require('../model/user.model');
// this database connectivity will create a model in that particular db
const db = require('../config/database');

// create user schema
const{Schema} = mongoose;

// schema for the todo items
const toDoSchema = new Schema({
    // created a userId for getting user data by ref
    userId:{
        type: Schema.Types.ObjectId,
        ref: userModel.modelName
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    }
});

// this line will name the collection in the db
const todoModal = db.model('todo', toDoSchema);

module.exports = todoModal;