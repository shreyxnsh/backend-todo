const mongoose = require('mongoose');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
=======
>>>>>>> f6ea32e120fddb380ca1c9a5a846060379773f15
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

<<<<<<< HEAD
userSchema.pre('save', async function(){
    try {
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password, salt);
        user.password = hashpass; 
    } catch (error) {
        throw error;
    }
})
=======
>>>>>>> f6ea32e120fddb380ca1c9a5a846060379773f15
const userModal = db.model('user', userSchema);

module.exports = userModal;