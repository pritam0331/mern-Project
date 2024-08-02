import React, { useState, useEffect, useRef } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import GoogleButton from 'react-google-button';
import './SignupSignin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { json, Navigate, useNavigate } from 'react-router-dom';

function SignupSignin() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const formRef = useRef(null); // Create a reference to the form element

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log({name,email,password});
      let result = await fetch('http://localhost:3001',{
        method:'POST',
        body: JSON.stringify({name,email,password}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // Handle form submission logic here
      result = await result.json();
      if(result){
        localStorage.setItem('user',JSON.stringify(result))
        Navigate('/signin')
      }
      console.log(result)
      
      formRef.current.reset(); // Reset the form using the reference
      setName('');
      setEmail('');
      setPassword('');
    }
    catch(error){
      console.error(error);
      alert('Error signing up')
    }
  };

  React.useEffect(() => {
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
        <div id='btn1'> <GoogleButton style={{background:"white",color:"grey",width:400}} onClick={() => login()}/></div>
        <span className='span'>or use your email for registration</span>
        <input type="text" name="name" placeholder="Name" className="input-field" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" name="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)}/>
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