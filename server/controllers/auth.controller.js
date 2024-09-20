import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { email, password, name } = req.body;

    try {
      if(!email || !password || !name) {
        throw new Error("fields required");
      }

      const userAlreadyExists = await User.findOne({email});
      if (userAlreadyExists) {
        return res.status(400).json({ success: false, message: "User already exists" });
      }

      const hashedPassword = await bcryptjs.hash(password, 10);

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

export const login = async (req, res) => {
    res.send("Login Route");
}

export const logout = async (req, res) => {
  res.send("Logout Route");
};