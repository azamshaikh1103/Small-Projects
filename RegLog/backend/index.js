import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;
const db_url = "mongodb://127.0.0.1:27017/LoginApp";

mongoose
  .connect(db_url)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.log(
      `Bro this error has occured while connecting database : ${err}`
    );
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.json());
app.use(cors());

app.get("/home", (req, res) => {
  res.send("Welcome to the home page");
});

app.post("/register", async (req, res) => {
  try {
    const hashPass = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      password: hashPass,
    });
    await newUser.save();
    res.status(201).json({ success: "Yoy have registered successfully " });
  } catch (err) {
    console.log(`Bro this error has occured while req a data: ${err}`);
    res.status(500).json({ error: "Bro something bad happened" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }).then((user) => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          console.log(email);
          res.json("success");
        } else {
          res.json("incorrect password");
        }
      } else {
        res.json("User is not registered");
      }
    });
  } catch (err) {
    console.log(`Login waala data nahi le paaya bhai : ${err} `);
  }
});

app.listen(port, () => {
  console.log(`Server started at port : ${port}`);
});
