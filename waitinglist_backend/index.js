import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import WaitingList from './model/schema.js'; // Ensure you include the .js extension

dotenv.config();

const app = express();
const port = 3000;

// Configure CORS
const corsOptions = {
    origin: 'https://startup-waitlist.vercel.app', // Replace with your React app's URL
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@waitinglist.ncspnpl.mongodb.net/?retryWrites=true&w=majority&appName=waitinglist`;

mongoose.connect(
    mongoUri
).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB\n', err);
});

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World')
})

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

app.get('/emails', async (req, res) => {
    try {
        const emails = await WaitingList.find();
        res.send(emails);
    } catch (err) {
        res.status(400).send
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});