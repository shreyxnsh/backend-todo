const router = require('express').Router();
const todoController = require('../controller/todo.controller');

//create todo task
router.post('/createtodo', todoController.createTodo );

module.exports = router;