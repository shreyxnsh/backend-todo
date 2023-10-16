const userModal = require('../model/user.model');

class UserService{
    static async registerUser(email,password){
        try {
            const creatUser = new userModal({email,password});
            return await creatUser.save();
        } catch (error) {
            throw error;
        }
    };
}

module.exports = UserService;