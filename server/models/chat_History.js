import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: URL,
        required: true
    },
}, {
        timestamps: true //createdAt, updatedAt
    });

const History = mongoose.model('History', historySchema);

export default History;
