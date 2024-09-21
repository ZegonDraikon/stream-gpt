import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://www.justwatch.com/appassets/img/home/global-home-bg-comp.png)' }}>
      <Header />
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <form className="relative z-10 w-full max-w-md mx-auto bg-black bg-opacity-80 p-8 rounded-lg mt-16">
        <h1 className="text-3xl font-bold text-white mb-6">
          {isSignInForm? "Sign in" : "Sign out"}
        </h1>

        <input 
          type="text" 
          placeholder="Email Address" 
          className="w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {!isSignInForm && 
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 mb-4 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />}

        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 mb-6 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button className="w-full py-3 bg-yellow-600 text-white font-bold rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          {isSignInForm? "Sign in" : "Sign out"}
        </button>

        <p className="text-gray-400 text-sm mt-6" onClick={toggleSignInForm}>
           <a href="#" className="text-white hover:underline">{isSignInForm? "New to JustWatch? Sign up Now" : "Already a user? Sign in now."}</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
