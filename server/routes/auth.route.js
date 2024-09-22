import express from 'express';
import { login, logout, signup, verifyEmail } from '../controllers/auth.controller.js';

const Router = express.Router();

Router.post("/signup", signup);

Router.post("/login", login);

Router.post("/logout", logout);

Router.post("/verify-email", verifyEmail);

export default Router;