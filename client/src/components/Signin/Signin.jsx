import React, { useState, useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './Signin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Signin() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  const validateForm = () => {
    let isValid = true;
    let errors = {};

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
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:3001/login', { email, password })
        .then((res) => {
          console.log(res);
          if (res.data === 'success') {
            localStorage.setItem('user', JSON.stringify({ email }));
            navigate('/');
          } else {
            setErrors({ general: 'Invalid email or password' });
          }
        })
        .catch((err) => {
          console.log(err);
          setErrors({ general: 'An error occurred. Please try again.' });
        });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      offset: 200,
    });
  }, []);

  return (
    <div className="signin-container" data-aos="zoom-in">
      <form className='signin-form' onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <div id='btn1'>
          <GoogleButton style={{ background: "white", color: "grey", width: 400 }} onClick={() => login()} />
        </div>

        <span className='span'>or use your account</span>

        <input 
          type="email" 
          placeholder="Email" 
          className={`input-field ${errors.email ? 'error' : ''}`}
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <input 
          type="password" 
          placeholder="Password" 
          className={`input-field ${errors.password ? 'error' : ''}`}
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <a href="/forgetpass" className="forgot-password">Forgot Your Password</a>

        <button type="submit" className="signin-button">SIGN IN</button>
        {errors.general && <p className="error-message1">{errors.general}</p>}
        <p className="signin-link">Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
}

export default Signin;