import express from 'express'
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import Chat from './models/chat.js';
//import History from './models/chat_History.js';

dotenv.config();

const app = express()

app.use(express.json());

app.get("/api/temp", (req, res) => {
    res.send("server is ready")
})

app.get("/api/chat", async (req, res) => {
    try{
        const chats = await Chat.find();
        //res.json(chats);
        //res.send(  `Title: ${title}, Content: ${content}`)
        //res.send("content sent\n");
    }
    catch(err){
        console.error("Error fetching chats: ", err.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
});

app.post("/api/chat", async(req, res) => {
    const chat  = req.body; // user will send this data

    if (!chat.content){
        return res.send("You didn't provide any text.");
    }
    const newChat = new Chat(chat);

    try {
        await newChat.save();   //save to database
         res.status(201).json({ success: true, data: newChat});
    }
    catch (err){
        console.err("Error creating new chat: ", err.message);
        res.status(500).json({ success: false, message: "Server Error"})
    }
});

app.delete("/api/chat/:id", async(req, res) => {
    const {id} = req.params;
    try{
        await Chat.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Chat deleted"})
    }
    catch(err){

    }
})
console.log(process.env.MONGO_URI);

app.listen(5800, () => {
    connectDB();
    console.log('server started at http://localhost:5800')
})

