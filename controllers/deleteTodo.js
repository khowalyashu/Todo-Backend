//import the model
const Todo = require("../models/Todo.js");

//define route handler
exports.createTodo = async(req,res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            succes:true,
            message:"Todo Deleted",

        })

        
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"

        });
    }
}