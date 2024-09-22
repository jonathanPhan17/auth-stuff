import express from 'express';
import { login, logout, signup, verifyEmail, forgotPassword, resetPassword } from '../controllers/auth.controller.js';

const Router = express.Router();

Router.post("/signup", signup);

Router.post("/login", login);

Router.post("/logout", logout);

Router.post("/verify-email", verifyEmail);

Router.post("/forgot-password", forgotPassword);

Router.post("/reset-password/:token", resetPassword);

export default Router;