const UserService = require('../services/user.services');

// register funtion for register api
exports.register = async (req, res, next)=>{
    try {
        const {email,password} = req.body;
        const successRes = await UserService.registerUser(email,password);
        res.json({status:true, success: "User registered successfully"}); 

    } catch (error) {
        throw error;
    }
}

// login function for login api
exports.login = async (req, res, next)=>{
    try {
        // take 2 parameter, email and password for logging in
        const {email,password} = req.body;

        // check if email is registered in the database
        const user = await UserService.checkUser(email);
        if(!user){
            throw new Error('User does not exist');
        }

        // passing the user entered password to the password in the db
        const isMatch = await user.comparePassword(password);
        if(isMatch == false){
            throw new Error('Password is not valid');
        };


        // create a jwt token if email and pass entered are correct and do operation in frontend
        let tokenData = {_id:user._id, email:user.email};

        // creating token using the generate function created in services
        const token = await UserService.generateJWT(tokenData,"secretkey",'1h');

        //now we have to send the token as a response for login
        res.status(200).json({status:true, token:token});

    } catch (error) {
        throw error;
    }
}

