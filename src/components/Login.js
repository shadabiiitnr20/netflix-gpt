import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkFormData } from "../../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebaseSetup";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmitButton = () => {
    const message = checkFormData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //Sign In / Sign Up Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
              console.log(user);
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute bg-black p-12 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-stone-600 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-stone-600 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-stone-600 rounded"
        />
        <p className="py-2 text-red-700 font-bold text-lg">{errorMessage}</p>
        <button
          className="bg-red-700 p-4 my-6 w-full rounded"
          onClick={handleSubmitButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4">
            New to Netfix?{" "}
            <span
              className="text-blue-500 cursor-pointer font-semibold"
              onClick={toggleSignInForm}
            >
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="py-4">
            Already Registered?{" "}
            <span
              className="text-blue-500 cursor-pointer font-semibold"
              onClick={toggleSignInForm}
            >
              Sign In Now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
