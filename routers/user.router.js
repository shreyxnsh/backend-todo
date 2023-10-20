const router = require('express').Router();
const userController = require('../controller/user.controller');

//registration api
router.post('/registration', userController.register );

//login api
router.post('/login', userController.login );


module.exports = router;