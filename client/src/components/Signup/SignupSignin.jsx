import React, { useState, useEffect, useRef } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import './SignupSignin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function SignupSignin() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [role, setRole] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate();
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
          const profileData = {
            googleId: res.data.id,
            email: res.data.email,
            name: res.data.name,
            profilePic: res.data.picture
          };
          setProfile(profileData);
          // Send profile data to backend
          axios.post('http://localhost:3001/api/google-login', profileData)
            .then(() => {
              localStorage.setItem('user', JSON.stringify(profileData));
              navigate('/');
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "*Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "*Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "*Email is invalid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "*Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms and conditions";
      isValid = false;
    }

    if (role === "admin" && !secretKey.trim()) {
      newErrors.secretKey = "*Secret key is required for admin";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if(role === 'admin' && secretKey!='RaktDaan@0987'){
        alert('Invalid secret key');
      }
      else{
        try {
          console.log({name, email, password, role});
          let result = await fetch('http://localhost:3001/', {
            method: 'POST',
            body: JSON.stringify({name, email, password, role}),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          result = await result.json();
          console.log(result);
          navigate('/signin');
          formRef.current.reset();
          setName('');
          setEmail('');
          setPassword('');
          setTermsAccepted(false);
          setRole('user');
        } catch (error) {
          console.error(error);
          alert('Error signing up');
        }
      }
      
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
    <div className="signup-signin-container" data-aos="zoom-in">
      <form ref={formRef} onSubmit={handleSubmit} className='signup-form'>
        <h1>Create Account</h1>
        <div>
          Register As
          <input type="radio" name="role" value="user" select onChange={(e) => setRole(e.target.value)} required />User
          <input type="radio" name="role" value="admin" onChange={(e) => setRole(e.target.value)} required />Admin
        </div>
        {role === "admin" ? (
          <input 
            type="text" 
            name="secretKey" 
            placeholder="Secret Key" 
            className="input-field1" 
            value={secretKey} 
            onChange={(e) => setSecretKey(e.target.value)}
          />
        ) : (
          <>
            <div className='btn'>
              <GoogleButton 
                style={{background:"white", color:"grey", width:400}} 
                onClick={() => login()}
              />
            </div>
            <span className='span'>or use your email for registration</span>
          </>
        )}
        {errors.secretKey && <p className="error-message">{errors.secretKey}</p>}
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
    </div>
  );
}

export default SignupSignin;