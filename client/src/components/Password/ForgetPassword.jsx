import React from 'react'
import './ForgetPassword.css'
import { useNavigate } from 'react-router-dom'
function ForgetPassword() {
  const naviagte = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    naviagte('/verifyotp');
  }
  return (
    <div class="form-box">
    <h2>Forget Password</h2>
    <form onSubmit={handleSubmit}>
      <input type="email" id="email" name="email" placeholder="Enter your E-mail"/>
      <button>Send Otp</button>
    </form>
  </div>
  )
}

export default ForgetPassword