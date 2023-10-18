const userModal = require('../model/user.model');

class UserService{
    // register a new user
    static async registerUser(email,password){
        try {
            const creatUser = new userModal({email,password});
            return await creatUser.save();
        } catch (error) {
            throw error;
        }
    };

    // function to check if user is registered in the db
    static async checkUser(email){
        try {
            return await userModal({email});
        } catch (error) {
            throw error;
        }
    };

}

module.exports = UserService;