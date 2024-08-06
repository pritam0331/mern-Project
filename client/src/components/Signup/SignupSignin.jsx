import React, { useState, useEffect, useRef } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import './SignupSignin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigate, useNavigate } from 'react-router-dom';

function SignupSignin() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const Navigate = useNavigate();
  const formRef = useRef(null);

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
    localStorage.removeItem('user');
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!name.trim()) {
      errors.name = "*Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "*Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "*Email is invalid";
      isValid = false;
    }

    if (!password) {
      errors.password = "*Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!termsAccepted) {
      errors.terms = "You must accept the terms and conditions";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log({name, email, password});
        let result = await fetch('http://localhost:3001', {
          method: 'POST',
          body: JSON.stringify({name, email, password}),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        result = await result.json();
        console.log(result);
        Navigate('/signin');
        formRef.current.reset();
        setName('');
        setEmail('');
        setPassword('');
        setTermsAccepted(false);
      } catch (error) {
        console.error(error);
        alert('Error signing up');
      }
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      offset: 200,
    })
  }, [])

  return (
    <div className="signup-signin-container" data-aos="zoom-in">
      <form ref={formRef} onSubmit={handleSubmit} className='signup-form'>
        <h1>Create Account</h1>
        <div id='btn1'>
          <GoogleButton 
            style={{background:"white", color:"grey", width:400}} 
            onClick={() => login()}
          />
        </div>
        <span className='span'>or use your email for registration</span>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          className="input-field1" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          className="input-field1" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          className="input-field1" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <div className="terms-container">
          <input 
            type="checkbox" 
            id="terms" 
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label htmlFor="terms">Accept the terms and Conditions</label>
        </div>
        {errors.terms && <p className="error-message">{errors.terms}</p>}
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