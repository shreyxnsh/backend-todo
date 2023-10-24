const mongoose = require('mongoose');
// creating an object of user model so that we can identify the todo belongs to which user
const categoryModel = require('../model/category.model');
// this database connectivity will create a model in that particular db
const db = require('../config/database');

// create user schema
const{Schema} = mongoose;

// schema for the todo items
const productSchema = new Schema({
    // created a userId for getting user data by ref
    productName:{
        type: String,
        required: true,
    },
    productDesc:{
        type: String,
    },
    productImage:{
        type: String,
    },
    productPrice:{
        type: Number,
        required: true,
        default: 0
    },
    productCat:{
        type: Schema.Types.ObjectId,
        ref: categoryModel.modelName
    },
    stock:{
        type: Number,
        required: true,
        default: 0
    },
});

// this line will name the collection in the db
const productModel = db.model('product', productSchema);

module.exports = productModel;