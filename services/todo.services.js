const todoModel = require('../model/todo.model');


class TodoService{
    // function to store data in the db
    static async createTodo(userId, title, desc){
        //create object of the todoModel
        const createTodo = new todoModel({userId, title, desc});
        return await createTodo.save();
    }
}

module.exports = TodoService;