import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registration() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:3000/register", value);
    setValue({
      username: "",
      email: "",
      phoneNo: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <>
      <div className=" w-screen h-screen bg-blue-50 flex justify-center items-center">
        <div className=" w-3/5 h-2/3 bg-white rounded-xl shadow-md flex flex-col items-center justify-between">
          <h1 className=" font-sans pt-5 text-5xl">Register</h1>
          <form className=" w-full h-4/5 bg-blue-200 rounded-b-xl flex flex-col justify-center items-center">
            <input
              className=" w-4/5 h-10 pl-4 rounded-lg outline-none my-2"
              value={value.username}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChanges}
            />
            <input
              className=" w-4/5 h-10 pl-4 rounded-lg outline-none my-2"
              value={value.email}
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChanges}
            />
            <input
              className=" w-4/5 h-10 pl-4 rounded-lg outline-none my-2"
              value={value.phoneNo}
              type="number"
              name="phoneNo"
              placeholder="Phone number"
              onChange={handleChanges}
            />
            <input
              className=" w-4/5 h-10 pl-4 rounded-lg outline-none my-2"
              value={value.password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChanges}
            />
            <button
              className=" w-3/5 h-12 mt-5 bg-blue-500 rounded-xl text-white font-semibold hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Register
            </button>
            <p className=" mt-2 text-sm">
              Already have an accout? <Link to="/login">Login</Link>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
