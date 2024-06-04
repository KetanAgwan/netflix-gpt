import React, { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import checkValidData from "../utils/validate";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ toggleForm }) => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      null
    );
    setErrorMsg(message);
    if (message === null) {
      //signIn
      signInUser();
    } else {
      return;
    }
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth,
      email.current.value,
      password.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("Login sucess");
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + " : " + errorMessage);
        console.log("login failed");
        navigate("/");
      });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute text-white bg-black bg-opacity-75 rounded-lg z-20 h-[400px] w-[350px] flex items-center justify-around flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
    >
      <h1 className="text-3xl absolute top-10 left-8">SignIn</h1>
      <input
        ref={email}
        type="email"
        placeholder="Email Address"
        className="w-4/5 py-2 px-3 mt-[70px] rounded-md outline-none bg-gray-600"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="w-4/5 py-2 px-3 mt-[-25px] rounded-md  outline-none bg-gray-600"
      />
      <b className="text-red-600 text-sm font-medium absolute left-9 bottom-40">
        {errorMsg}
      </b>
      <button
        type="submit"
        className="text-white py-2 w-4/5 rounded-md bg-red-600"
        onClick={handleLogin}
      >
        SignIn
      </button>
      <h1>
        New to Netflix ?{" "}
        <span
          className="font-bold cursor-pointer hover:underline underline-offset-2"
          onClick={toggleForm}
        >
          SignUp Now
        </span>
      </h1>
    </form>
  );
};

export default LoginForm;
