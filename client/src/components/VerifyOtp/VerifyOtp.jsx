import React from 'react'
import { useNavigate } from 'react-router-dom'

function VerifyOtp() {
    const navigate = useNavigate();
    const handleSubmit =(e) =>{
        e.preventDefault();
        navigate('/confirm')
    }
    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <h2>Enter OTP:</h2>
                <label htmlFor="otp">OTP</label>
                <input type="text" id="otp" name="otp" placeholder="Enter OTP" />
                <button type="submit">Varify OTP</button>
            </form>
        </div>
    )
}

export default VerifyOtp