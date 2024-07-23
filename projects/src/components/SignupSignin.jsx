import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const SignupSignin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign up with:', name, email, password);
    } else {
      console.log('Sign in with:', email, password);
    }
    // Add your authentication logic here
  };

  const toggleView = () => {
    setIsSignUp(!isSignUp);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen conatiner-fluid">
      {/* Left side */}
      <div className={`w-full md:w-1/2 ${isSignUp ? 'bg-gradient-to-br from-red-400 to-pink-500 text-white' : 'bg-white'} flex flex-col justify-center items-center p-8 md:p-12 transition-all duration-500 order-2 md:order-1`}>
        {isSignUp ? (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Welcome Back!</h2>
            <p className="text-center mb-8 px-4">
              To keep connected with us please login with your personal info
            </p>
            <button 
              onClick={toggleView}
              className="border-2 border-white text-white px-8 py-2 rounded-full font-bold hover:bg-white hover:text-pink-500 transition-colors"
            >
              SIGN IN
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sign In</h1>
            <div className="flex justify-center space-x-4 mb-6">
              <SocialButton icon={<FaFacebookF />} />
              <SocialButton icon={<FaGoogle />} />
              {/* <SocialButton icon={<FaLinkedinIn />} /> */}
            </div>
            <p className="text-center text-gray-600 mb-6">or use your account</p>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-gray-100 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-100 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="text-gray-600 hover:underline block mb-6">
              Forgot Your Password
            </a>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded font-bold hover:bg-orange-600"
            >
              SIGN IN
            </button>
          </form>
        )}
      </div>

      {/* Right side */}
      <div className={`w-full md:w-1/2 ${isSignUp ? 'bg-white' : 'bg-gradient-to-br from-red-400 to-pink-500 text-white'} flex flex-col justify-center items-center p-8 md:p-12 transition-all duration-500 order-1 md:order-2`}>
        {isSignUp ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Create Account</h1>
            <div className="flex justify-center space-x-4 mb-6">
              <SocialButton icon={<FaFacebookF />} />
              <SocialButton icon={<FaGoogle />} />
              {/* <SocialButton icon={<FaLinkedinIn />} /> */}
            </div>
            <p className="text-center text-gray-600 mb-6">or use your email for registration</p>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 bg-gray-100 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-gray-100 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-100 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded font-bold hover:bg-orange-600"
            >
              SIGN UP
            </button>
          </form>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Hello, Friend!</h2>
            <p className="text-center mb-8 px-4">
              Enter your details and start journey with us
            </p>
            <button 
              onClick={toggleView}
              className="border-2 border-white text-white px-8 py-2 rounded-full font-bold hover:bg-white hover:text-pink-500 transition-colors"
            >
              SIGN UP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const SocialButton = ({ icon }) => (
  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100">
    {icon}
  </button>
);

export default SignupSignin;