import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Remove token
    localStorage.removeItem("token");

    // Redirect to login pahe
    navigate("/login");
  };

  if (!!isLoggedIn) {
  }

  return (
    <>
      <div className=" h-screen w-screen bg-red-50 flex flex-col justify-center items-center ">
        <h1>Welcome to the Homepage</h1>
        {isLoggedIn ? (
          <button
            onClick={handleLogOut}
            className=" w-1/2 bg-red-400 h-14 rounded-xl hover:bg-red-500"
          >
            <Link to="/login">Log out</Link>
          </button>
        ) : (
          <center className=" w-full">
            <p>You are not logged in.</p>
            <button className=" w-1/4 bg-red-400 h-14 rounded-xl hover:bg-red-500">
              <Link to="/login">login</Link>
            </button>
          </center>
        )}
      </div>
    </>
  );
}
