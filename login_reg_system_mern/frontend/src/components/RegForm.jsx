import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function RegForm() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
  });


  const handleChanges = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/register", value)
      .then(() => {
        console.log("data sent successfully");
      })
      .catch((err) => {
        console.log(`Error aa gaya bhai : ${err}`);
      });
    navigate("/profile");
  };

  return (
    <>
      <div className=" w-screen h-screen bg-red-50 flex justify-center items-center">
        <div className=" w-3/5 h-3/4 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <h1 className=" w-full h-12 flex-initial flex justify-center items-center text-xl font-semibold rounded-t-lg bg-red-400">
            Register
          </h1>
          <form
            className=" flex-auto w-full flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <input
              className=" w-2/3 h-14 rounded-xl mb-2 mt-4 pl-4 border-2 outline-none"
              type="text"
              name="username"
              autoComplete="username" // Add autoComplete attribute
              placeholder="Username"
              onChange={handleChanges}
            />
            <input
              className=" w-2/3 h-14 rounded-xl my-2 pl-4 border-2 outline-none"
              type="email"
              name="email"
              autoComplete="email" // Add autoComplete attribute
              placeholder="Email Address"
              onChange={handleChanges}
            />
            <input
              className=" w-2/3 h-14 rounded-xl my-2 pl-4 border-2 outline-none"
              type="number"
              name="phoneNo"
              autoComplete="phoneNo" // Add autoComplete attribute
              placeholder="Phone Number"
              onChange={handleChanges}
            />
            <input
              className=" w-2/3 h-14 rounded-xl my-2 pl-4 border-2 outline-none"
              type="password"
              name="password"
              autoComplete="current-password" // Add autoComplete attribute
              placeholder="Password"
              onChange={handleChanges}
            />
            <input
              className=" w-1/3 h-14 mt-2 rounded-xl outline-none bg-red-400 hover:bg-red-500"
              value="Next"
              type="submit"
            />
            <p className=" mt-2 text-sm ">
              Already have an accout?{" "}
              <Link className=" text-red-600" to="/login">Login.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
