const userModel = require('../model/user.model');
// import jwt
const jwt = require('jsonwebtoken');

class UserService{
    // register a new user
    static async registerUser(email,password){
        try {
            const creatUser = new userModel({email,password});
            return await creatUser.save();
        } catch (error) {
            throw error;
        }
    };

    // function to check if user is registered in the db
    static async checkUser(email){
        try {
            return await userModel.findOne({email});
        } catch (error) {
            throw error;
        }
    };

    // function to generate jwt token for user login
    static async generateJWT(tokenData, secretkey, jwt_expire){
        return jwt.sign(tokenData,secretkey,{expiresIn:jwt_expire})
    };

}

module.exports = UserService;