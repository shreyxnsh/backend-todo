const TodoService = require('../services/todo.services');

// createTodo function to create a todo item for the user and sending to db
// req comes from the frontend to the api
// res is what is sent back to the frontend from the api
exports.createTodo = async (req, res, next)=>{
    try {
       // initializing parameters in the request body 
       const {userId,title,desc} = req.body;
       // send these 3 data to services
       let todo = await TodoService.createTodo(userId, title, desc);
       res.json({status:true, success: todo}); 

    } catch (error) {
        next(error);
    }
}

// function to get all todo tasks of a particular user
exports.getUserTodo = async (req, res, next) => {
    try {
       // Extract the userId from the query parameters
       const { userId } = req.query;
       
       // data will be fetched and stored in this todo
       let todo = await TodoService.getTodoData(userId);
       res.json({ status: true, success: todo });

    } catch (error) {
        next(error);
    }
}
