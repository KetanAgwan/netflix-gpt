import React from "react";

const SignUpForm = ({toggleForm}) => {
  return (
    <form className="absolute text-white bg-black bg-opacity-75 rounded-lg z-20 h-[400px] w-[350px] flex items-center justify-around flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-3xl absolute top-10 left-8">SignUp</h1>
      <input
        type="text"
        placeholder="Full name"
        className="w-4/5 py-2 px-3 mt-[75px] rounded-md outline-none bg-gray-600"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-4/5 py-2 px-3 mt-[-20px] rounded-md outline-none bg-gray-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-4/5 py-2 px-3 mt-[-20px] rounded-md  outline-none bg-gray-600"
      />
      <button
        type="submit"
        className="text-white py-2 w-4/5 rounded-md bg-red-600"
      >
        SignUp
      </button>
      <h1>
        already registered ?{" "}
        <span className="font-bold cursor-pointer hover:underline underline-offset-2" onClick={toggleForm}>
        SignIn Now
        </span>
      </h1>
    </form>
  );
};

export default SignUpForm;
