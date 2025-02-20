import mongoose from 'mongoose';

const tempSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true   //createdAt, updatedAt
    }
);

const temp = mongoose.model('temp', tempSchema);

export default temp;
