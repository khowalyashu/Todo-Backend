const express = require('express');
const app = express();


//load config from env file
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo API
const todoRoutes = require("./routes/todos")

//mount the toso ASPI routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT , () =>{
    console.log(`Server started sucessfully ${PORT}`)
})


//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/" , (req,res) => {
    res.send(`<h1> this is the HOMEPAGE baby</h1>`);
})

