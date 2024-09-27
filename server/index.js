import express from 'express';
import { connectDB } from './db/db.js';
import dotenv from "dotenv";
import cors from "cors";
import Router from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:5173", credentials: true}));

app.use(express.json());
app.use(cookieParser());

dotenv.config();


app.use("/api/auth", Router);

app.listen(PORT, () => {
    connectDB();
})