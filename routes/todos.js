const express = require('express');
const router = express.Router();


//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo , getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("..controllers/deleteTodo")
//define API Routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo:id", getTodoByid);
router.put("/updatetTodo:id",updateTodo);
router.delete("deleteTodo:id", deleteTodo)
module.exports = router;


//mapping post with the controller