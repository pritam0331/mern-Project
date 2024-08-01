import React from 'react'
import './ForgetPassword.css'
function ForgetPassword() {
  return (
    <div class="form-box">
    <h2>Forget Password</h2>
    <form>

      <input type="email" id="email-input" name="email" placeholder="Enter your E-mail"/>
      <a href="/varifyotp"><button>Send Otp</button></a>

      <input type="email" id="email" name="email" placeholder="Enter your E-mail"/>
      <a href="/about"><button>Send Otp</button></a>

    </form>
  </div>
  )
}


export default ForgetPassword



