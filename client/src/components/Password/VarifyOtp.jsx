import React from 'react'

function VarifyOtp() {
  return (
    <div className="form-box">
    <form>
      <h2>Enter OTP</h2>
      <input type="number" id="otp" name="otp" placeholder="Enter OTP"/>
      <button type="submit"><a href="/newpass">Verify OTP</a></button>
    </form>
  </div>
  )
}

export default VarifyOtp
