import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import WaitingList from './model/schema.js'; // Ensure you include the .js extension

dotenv.config();

const app = express();
const port = 3003;

const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@waitinglist.ncspnpl.mongodb.net/?retryWrites=true&w=majority&appName=waitinglist`;

mongoose.connect(
    mongoUri
).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB\n', err);
});

app.use(express.json());
app.use(cors());

app.post('/submit', async (req, res) => {
    const { email } = req.body;
    try {
        const waitingList = new WaitingList({ email });
        await waitingList.save();
        res.send('You have been added to the waiting list');
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
