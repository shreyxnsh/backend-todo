const todoModel = require('../model/todo.model');


class TodoService{
    // function to store data in the db
    static async createTodo(userId, title, desc){
        //create object of the todoModel
        const createTodo = new todoModel({userId, title, desc});
        return await createTodo.save();
    }

    // function to get users todo task
    static async getTodoData(userId){
        //create object of todomodel which will fetch data by userid
        // mongoose query to fetch
        const todoData = await todoModel.find({userId});
        return todoData;
    }

     // function to delete a users todo
     static async deleteTodoData(_id){
        //create object of todomodel which will fetch data by userid
        // mongoose query to fetch
        const deletedTodo = await todoModel.findOneAndDelete({_id: _id});
        return deletedTodo;
    }

}

module.exports = TodoService;