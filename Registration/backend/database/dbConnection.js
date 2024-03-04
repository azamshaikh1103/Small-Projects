import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
const port = 3000;
const db_url = "mongodb://127.0.0.1:27017/TempUsers";

mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected Successfully"))
  .catch((err) => console.log(`Error occured : ${err}`));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.json());
app.use(cors());

app.post("/user", async (req, res) => {
  try {
    const hashPass = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
      phoneNo: req.body.phoneNo,
    });
    await newUser.save();
    res.status(201).json({ success: "Data added successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ warning: "Some error has occured" });
  }
});

app.listen(port, () => console.log(`Server started at : ${port}`));
