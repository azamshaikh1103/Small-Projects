import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        if (result.data === "success") {
          setEmail("");
          setPassword("");
          navigate("/");
        }
        else{
          setEmail("");
          setPassword("");   
        }
      })
      .catch((err) => console.log(`Error aa gaya bhai : ${err}`));
  };

  return (
    <>
      <div className=" w-screen h-screen bg-blue-50 flex justify-center items-center">
        <div className=" w-3/5 h-2/3 bg-white rounded-xl shadow-md flex flex-col items-center justify-between">
          <h1 className=" font-sans pt-5 text-5xl">Login</h1>
          <form className=" w-full h-4/5 bg-blue-200 rounded-b-xl flex flex-col justify-center items-center">
            <input
              className=" w-4/5 h-10 pl-4 rounded-lg outline-none my-2"
              value={email}
              type="email"
              name="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className=" w-4/5 h-10 pl-4 rounded-lg outline-none my-2"
              value={password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className=" w-3/5 h-12 mt-5 bg-blue-500 rounded-xl text-white font-semibold hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Login
            </button>
            <p className=" mt-2 text-sm">
              Don't have an account?
              <Link to="/register"> Create One</Link>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
