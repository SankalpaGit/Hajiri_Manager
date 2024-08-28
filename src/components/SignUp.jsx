import React from "react";
import signup from "../../public/images/sign.png";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div className="bg-white flex justify-between">
      <div className="ml-32 mr-22 flex flex-col w-2/5 justify-center text-center">
        <h2 className="m-4 font-bold text-gray-600 text-4xl font-serif tracking-wide">
          Login
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username or Gmail address"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600"
            onClick={handleClick}
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              navigate("/");
            }}
            onError={handleLoginFailure}
          />
        </button>
      </div>

      <div className="flex flex-col p-5 text-center border-4 border-[#D367CB] rounded-l-full left-0 h-screen w-2/5 justify-center ">
        <img
          src={signup}
          alt="Illustration"
          className="ml-44 w-72 mb-4 rounded-lg"
        />
        <div className="ml-11 mt-5">
          <h2 className="text-4xl font-bold font-serif">Hajiri Manager</h2>
          <p className="text-gray-600 text-xl p-3 tracking-wide font-serif">
            Your Very Own Attendance System.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
