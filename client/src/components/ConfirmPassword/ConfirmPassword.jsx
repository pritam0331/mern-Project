import React from 'react'

function ConfirmPassword() {
  return (
    <div className="form-box">
  <h2>Reset Password</h2>
  <form>
    <label htmlFor="new-password">New Password:</label>
    <input
      type="text"
      id="new-password"
      name="new-password"
      placeholder="New Password"
      required=""
    />
    <label htmlFor="confirm-password">New Password:</label>
    <input
      type="text"
      id="confirm-password"
      name="confirm-password"
      placeholder="Confirm Password"
      required=""
    />
    <button type="submit">Submit</button>
  </form>
</div>
  )
}

export default ConfirmPassword