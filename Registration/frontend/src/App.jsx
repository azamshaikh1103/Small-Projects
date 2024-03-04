import { useState } from "react";
import axios from "axios";

export default function App() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    phoneNo: "",
  });
  const handleChanges = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await axios.post("http://localhost:3000/user", value);
    setValue({
      username: "",
      email: "",
      password: "",
      phoneNo: "",
    });
    console.log(userData.data);
  };

  return (
    <>
      <div>
        <div
          id="form-wrapper"
          className=" bg-blue-50 w-screen h-screen flex justify-center items-center"
        >
          <div className=" w-2/3 h-5/6 bg-white rounded-xl ">
            <div className=" flex justify-center items-center h-12 bg-blue-200 rounded-t-xl">
              <h6>Registration</h6>
            </div>
            <div className=" bg-white w-full flex rounded-b-xl h-full flex-col items-center justify-center">
              <div className=" bg-red-100 w-4/5 h-3/5 rounded-xl flex flex-col justify-center items-center">
                <div className=" my-2 w-5/6 flex justify-center items-center">
                  <label
                    htmlFor=""
                    className=" w-24 h-8 rounded-l-xl px-3 bg-blue-400 inline-block text-white"
                  >
                    Username :{" "}
                  </label>
                  <input
                    type="text"
                    className=" w-4/6 h-8 rounded-r-xl pl-3 border-none outline-none"
                    placeholder="Your Username here"
                    name="username"
                    value={value.username}
                    onChange={handleChanges}
                  />
                </div>
                <div className=" my-2 w-5/6 flex justify-center items-center">
                  <label
                    htmlFor=""
                    className=" w-24 h-8 rounded-l-xl px-3 bg-blue-400 inline-block text-white"
                  >
                    Email :{" "}
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address here"
                    name="email"
                    value={value.email}
                    onChange={handleChanges}
                    className=" w-4/6 h-8 rounded-r-xl pl-3 border-none outline-none"
                  />
                </div>
                <div className=" my-2 w-5/6 flex justify-center items-center">
                  <label
                    htmlFor=""
                    className=" w-24 h-8 rounded-l-xl px-3 bg-blue-400 inline-block text-white"
                  >
                    Password :{" "}
                  </label>
                  <input
                    type="password"
                    placeholder="Your password here"
                    name="password"
                    value={value.password}
                    onChange={handleChanges}
                    className=" w-4/6 h-8 rounded-r-xl pl-3 border-none outline-none"
                  />
                </div>
                <div className=" my-2 w-5/6 flex justify-center items-center">
                  <label
                    htmlFor=""
                    className=" w-24 h-8 rounded-l-xl px-3 bg-blue-400 inline-block text-white"
                  >
                    PhoneNo. :{" "}
                  </label>
                  <input
                    type="number"
                    placeholder="Your phone number here"
                    name="phoneNo"
                    value={value.phoneNo}
                    onChange={handleChanges}
                    className=" w-4/6 h-8 rounded-r-xl pl-3 border-none outline-none"
                  />
                </div>
                <button
                  className=" w-2/5 h-12 bg-blue-500 rounded-xl text-white mt-5 hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
