const router = require('express').Router();
const todoController = require('../controller/todo.controller');
const todoModel = require('../model/todo.model');

//create todo task
router.post('/createtodo', todoController.createTodo );

// get all the todo tasks of the user with userId as query parameter
router.get('/getUserTodo', todoController.getUserTodo);

// delete todo task of a user
router.delete('/deletetodo', todoController.deleteTodo );

module.exports = router;