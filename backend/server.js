const express = require("express"); //Import express
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express(); // Create instance of this express variable
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running Successfully");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

// If I want to get the single chat date with the help of an Id

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id);
    
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(`${PORT}`, console.log(`Server started on PORT ${PORT}`)); 