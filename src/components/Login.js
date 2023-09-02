import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netfix-bg-img"
        />
      </div>
      <form className="w-4/12 absolute bg-black p-12 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-stone-600 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-stone-600 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-stone-600 rounded"
        />
        <button className="bg-red-700 p-4 my-6 w-full rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4">
            New to Netfix?{" "}
            <span className="cursor-pointer font-semibold" onClick={toggleSignInForm}>
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="py-4">
            Already Registered?{" "}
            <span className="cursor-pointer font-semibold" onClick={toggleSignInForm}>
              Sign In Now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
