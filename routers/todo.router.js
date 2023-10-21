const router = require('express').Router();
const todoController = require('../controller/todo.controller');

//create todo task
router.post('/createtodo', todoController.createTodo );

//get all the todo tasks of the user
router.get('/getUserTodo', todoController.getUserTodo );
module.exports = router;