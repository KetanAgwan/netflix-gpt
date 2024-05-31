import React, { useRef, useState } from "react";
import handleValidation from "../utils/handleValidation";

const SignUpForm = ({ toggleForm }) => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMsg, setErrorMsg] = useState(null);

  const handleError = () => {
    setErrorMsg(handleValidation(email.current.value, password.current.value,name.current.value));
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute text-white bg-black bg-opacity-75 rounded-lg z-20 h-[400px] w-[350px] flex items-center justify-around flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
      <h1 className="text-3xl absolute top-10 left-8">SignUp</h1>
      <input
        ref={name}
        type="text"
        placeholder="Full name"
        className="w-4/5 py-2 px-3 mt-[75px] rounded-md outline-none bg-gray-600"
      />
      <input
        ref={email}
        type="email"
        placeholder="Email Address"
        className="w-4/5 py-2 px-3 mt-[-20px] rounded-md outline-none bg-gray-600"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="w-4/5 py-2 px-3 mt-[-20px] rounded-md  outline-none bg-gray-600"
      />
      <b className="text-red-600 text-sm font-medium absolute left-9 bottom-32">
        {errorMsg}
      </b>
      <button
        type="submit"
        className="text-white py-2 w-4/5 rounded-md bg-red-600"
        onClick={handleError}
      >
        SignUp
      </button>
      <h1>
        already registered ?{" "}
        <span
          className="font-bold cursor-pointer hover:underline underline-offset-2"
          onClick={toggleForm}
        >
          SignIn Now
        </span>
      </h1>
    </form>
  );
};

export default SignUpForm;
