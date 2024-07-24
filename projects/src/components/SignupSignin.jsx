import React from 'react';
import { FaGoogle} from 'react-icons/fa';
import './SignupSignin.css';

function SignupSignin() {
  return (
    <div className="signup-signin-container">
      <form action="" className='signup-form'>
        <h1>Create Account</h1>
        <button className="google-button">
          <FaGoogle /> Signup with Google
        </button>
        <span className='span'>or use your email for registration</span>
        <input type="text" name="name" placeholder="Name" className="input-field" />
        <input type="email" name="email" placeholder="Email" className="input-field" />
        <input type="password" name="password" placeholder="Password" className="input-field" />
        <div className="terms-container">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">Accept the terms and Conditions</label>
        </div>
        <button type="submit" className="signup-button">SIGN UP</button>
        <p className="signin-link">Already have an account? <a href="/signin">Sign in</a></p>
      </form>
    </div>
  );
}

export default SignupSignin;