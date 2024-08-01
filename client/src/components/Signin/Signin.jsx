import React, { useState, useEffect } from 'react';
// import { FaGoogle } from 'react-icons/fa';
import GoogleButton from 'react-google-button'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './Signin.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Signin() {
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

  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      offset: 200,
    })
  }, [])
  return (
    <div className="signin-container" data-aos="zoom-in">
      <form className='signin-form'>
        <h1>Sign In</h1>
        
       <div id='btn1'> <GoogleButton type='button' onClick={() => login()}/></div>

        
        <span className='span'>or use your account</span>
        
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        
        <a href="/forgetpassword" className="forgot-password">Forgot Your Password</a>
        
        <button type="submit" className="signin-button">SIGN IN</button>
        <p className="signin-link">Don't have an account? <a href="/signup">Sign up</a></p>
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

export default Signin;