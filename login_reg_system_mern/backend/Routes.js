import express from "express";
import bcrypt from "bcrypt";
import { User } from "./userModel.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, phoneNo, password } = req.body;
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, phoneNo, password: hashPass });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Couldn't get the data");
    console.log(`This error is comming : ${err}`);
  }
});

router.get("/", (req, res) => {
  res.send("Hey there I am running");
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        res.status(200).send("Logedin");
      } else {
        res.status(401).send("Incorrect Password");
      }
    } else {
      res.status(404).send("User is not registered");
    }
  } catch (err) {
    console.error(`Error logging in: ${err}`);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
