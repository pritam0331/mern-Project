import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import './Signin.css';

function Signin() {
  return (
    <div className="signin-container">
      <form>
        <h1>Sign In</h1>
        
        <button type="button" className="google-button">
          <FaGoogle /> Signin with Google
        </button>
        
        <span className='span'>or use your account</span>
        
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        
        <a href="#" className="forgot-password">Forgot Your Password</a>
        
        <button type="submit" className="signin-button">SIGN IN</button>
        <p className="signin-link">Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
}

export default Signin;