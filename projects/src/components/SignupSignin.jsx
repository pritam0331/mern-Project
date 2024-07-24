import React, { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './SignupSignin.css';

function SignupSignin() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: 'application/json'
        }
      })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="signup-signin-container">
      <form onSubmit={handleSubmit} className='signup-form'>
        <h1>Create Account</h1>
        <button type="button" onClick={() => login()} className="google-button">
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
      {profile && (
        <div>
          <h2>User Profile</h2>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      )}
    </div>
  );
}

export default SignupSignin;