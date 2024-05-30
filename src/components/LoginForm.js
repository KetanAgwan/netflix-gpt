import React from "react";

const LoginForm = ({toggleForm}) => {
  return (
    <form className="absolute text-white bg-black bg-opacity-75 rounded-lg z-20 h-[400px] w-[350px] flex items-center justify-around flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-3xl absolute top-10 left-8">SignIn</h1>
      <input
        type="email"
        placeholder="Email Address"
        className="w-4/5 py-2 px-3 mt-[70px] rounded-md outline-none bg-gray-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-4/5 py-2 px-3 mt-[-25px] rounded-md  outline-none bg-gray-600"
      />
      <button
        type="submit"
        className="text-white py-2 w-4/5 rounded-md bg-red-600"
      >
        SignIn
      </button>
      <h1>
        New to Netflix ?{" "}
        <span className="font-bold cursor-pointer hover:underline underline-offset-2" onClick={toggleForm}>
        SignUp Now
        </span>
      </h1>
    </form>
  );
};

export default LoginForm;
