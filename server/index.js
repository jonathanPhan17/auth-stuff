import express from 'express';
import { connectDB } from './db/db.js';
import dotenv from "dotenv";
import Router from './routes/auth.route.js';

const app = express();

dotenv.config();

app.get("/", (req, res) => {
    res.send("sup")
})

app.use("/api/auth", Router);

app.listen(3000, () => {
    connectDB();
    console.log("Server running on port 3000")
})