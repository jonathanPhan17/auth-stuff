import express from 'express';
import { connectDB } from './db/db.js';

const app = express();

app.get("/", (req, res) => {
    res.send("sup")
})

app.listen(3000, () => {
    connectDB();
    console.log("Server running on port 3000")
})