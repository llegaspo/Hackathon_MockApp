import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    title:{
        type: String,
        //required: True,
    },
    content:{
        type: String,
    }

}, {
        timestamp: true
    });

const Chat = mongoose.model('Chats', chatSchema);

export default Chat;
