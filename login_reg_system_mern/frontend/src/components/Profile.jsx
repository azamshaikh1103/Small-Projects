import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div className=" w-screen h-screen bg-red-50 flex justify-center items-center">
        <div className=" w-3/5 h-3/4 bg-white rounded-xl shadow-lg flex flex-col items-center">
          <h1 className=" w-full h-12 flex-initial flex justify-center items-center text-xl font-semibold rounded-t-lg bg-red-400">
            Profile
          </h1>
          <form className=" flex-auto w-full flex flex-col justify-center items-center">
            <div className=" w-full h-14 mb-2 flex justify-evenly">
              <input
                className=" w-2/5 h-14 mr-1 pl-4 border-2 rounded-xl outline-none"
                type="text"
                name="firstName"
                placeholder="First Name"
                // onChange=""
              />
              <input
                className=" w-2/5 h-14 pl-4 border-2 rounded-xl outline-none"
                type="text"
                name="lastName"
                placeholder="Last Name"
                // onChange=""
              />
            </div>
            <input
              className=" w-2/3 h-14 rounded-xl my-2 pl-4 border-2 outline-none"
              type="text"
              name="country"
              placeholder="Country"
            //   onChange=""
            />
            <input
              className=" w-2/3 h-14 rounded-xl my-2 pl-4 border-2 outline-none"
              type="number"
              name="phoneNo"
              placeholder="Phone Number"
            //   onChange=""
            />
            <button className=" w-1/3 h-14 mt-2 rounded-xl outline-none bg-red-400 hover:bg-red-500">
              Register
            </button>
            <p className=" mt-2 text-sm ">
              Already have an accout?{" "}
              <Link className=" text-red-600" to="/login">
                Login.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
