import { useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthWorkFlow = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-[100vh] w-full relative">
      <Header />
      <div className="h-[100vh] w-full absolute z-0">
        <img
          className="h-full w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_large.jpg"
          alt="background img"
        />
      </div>
      {isSignInForm ? (
        <LoginForm toggleForm={toggleSignInFrom} />
      ) : (
        <SignUpForm toggleForm={toggleSignInFrom} />
      )}
    </div>
  );
};

export default AuthWorkFlow;
