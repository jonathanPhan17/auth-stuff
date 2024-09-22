import express from 'express';
import { login, logout, signup, verifyEmail, forgotPassword } from '../controllers/auth.controller.js';

const Router = express.Router();

Router.post("/signup", signup);

Router.post("/login", login);

Router.post("/logout", logout);

Router.post("/verify-email", verifyEmail);

Router.post("/forgot-password", forgotPassword);

export default Router;