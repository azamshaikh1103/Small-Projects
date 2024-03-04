import express from "express";

const app = express();
const port = 6969;

app.get("/register", (req, res) => {
  res.send("You can register here !!!");
});

app.get("/home", (req, res) => {
  res.send("Hey there I am running !!! ");
});

app.get("/login", (req, res) => {
  res.send("You can login here !!!");
});

app.listen(port, () => {
  console.log(`The server is running on : ${port}`);
});
