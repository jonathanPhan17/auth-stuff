import express from 'express';
import { connectDB } from './db/db.js';
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
    res.send("sup")
})

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
    connectDB();
    console.log("Server running on port 3000")
})