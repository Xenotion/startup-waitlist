import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const waitingListSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const WaitingList = model('WaitingList', waitingListSchema);
export default WaitingList;
