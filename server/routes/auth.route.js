import express from 'express';

const Router = express.Router();

Router.get("/signup", (req, res) => {
    res.send("Signup Route")
})

export default Router;