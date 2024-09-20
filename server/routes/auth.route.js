import express from 'express';
import { signup } from '../controllers/auth.controller';

const Router = express.Router();

Router.get("/signup", signup);

Router.get("/login", (req, res) => {
    res.send("Login Route")
})

Router.get("/logout", (req, res) => {
  res.send("Logout Route");
});

export default Router;