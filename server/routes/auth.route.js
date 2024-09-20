import express from 'express';

const Router = express.Router();

Router.get("/signup", (req, res) => {
    res.send("Signup Route")
})

Router.get("/login", (req, res) => {
    res.send("Login Route")
})

export default Router;