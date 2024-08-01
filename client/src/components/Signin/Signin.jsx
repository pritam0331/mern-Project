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
  const navigate = useNavigate()
  // const [loginError, setLoginError] = useState(null);

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

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Check email
  //     const emailResponse = await axios.post('http://localhost:3000/check-email', { email });

  //     if (emailResponse.status === 200) {
  //       // Email is valid, proceed to check password
  //       const loginResponse = await axios.post('http://localhost:3000/login', { email, password });

  //       if (loginResponse.status === 200) {
  //         setLoginError(null);
  //         alert('Successfully logged in');
  //         // Perform any additional login success actions here
  //       }
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       setLoginError(error.response.data.message);
  //     } else {
  //       setLoginError('An error occurred. Please try again.');
  //     }
  //   }
  // };

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then((res)=>{
      console.log(res);
      if(res.data==='success'){
        navigate('/')
        setEmail('');
        setPassword('');
      }
    })
    .catch((err)=>{
      console.log(err);
      })
  }

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

        <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />

        <a href="/forgetpass" className="forgot-password">Forgot Your Password</a>

        <button type="submit" className="signin-button">SIGN IN</button>
        {/* {loginError && <p style={{ color: 'red' }}>{loginError}</p>} */}
        <p className="signin-link">Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
      {/* {profile && (
        <div>
          <h2>User Profile</h2>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <button onClick={logOut}>Log out</button>
        </div>
      )} */}
    </div>
  );
}

export default Signin;
