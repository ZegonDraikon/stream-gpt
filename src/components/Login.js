import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'; // Import addUser action
import { USER_AVATAR } from '../utils/constants';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

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
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://www.justwatch.com/appassets/img/home/global-home-bg-comp.png)' }}
    >
      <Header />
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 w-full max-w-md mx-auto bg-black bg-opacity-60 p-8 rounded-lg mt-16"
      >
        <h1 className="text-3xl font-bold text-white mb-6">
          {isSignInForm ? 'Sign in' : 'Sign up'}
        </h1>

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {errorMessage && (
          <p className="p-4 my-6 text-red-500 bg-red-200 rounded-md">
            {errorMessage}
          </p>
        )}

        <button
          className="w-full py-3 bg-yellow-600 text-white font-bold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign in' : 'Sign up'}
        </button>

        <p className="text-gray-400 text-sm mt-6 cursor-pointer" onClick={toggleSignInForm}>
          <a href="#" className="text-white hover:underline">
            {isSignInForm ? 'New to JustWatch? Sign up Now' : 'Already a user? Sign in now.'}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
