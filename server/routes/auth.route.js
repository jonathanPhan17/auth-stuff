import express from 'express';
import { login, signup } from '../controllers/auth.controller';

const Router = express.Router();

Router.get("/signup", signup);

Router.get("/login", login);

Router.get("/logout", (req, res) => {
  res.send("Logout Route");
});

export default Router;