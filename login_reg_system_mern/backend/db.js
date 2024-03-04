import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbconnection = () => {
  mongoose
    .connect(process.env.DB_CONN)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log(`Bhai Connection me error aa gaya : ${err}`);
    });
};

export default dbconnection;
