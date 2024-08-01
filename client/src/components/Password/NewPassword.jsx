import React from 'react'

function NewPassword() {
  return (
    <div class="form-box">
    <h2>Reset Password</h2>
    <form>
      <input type="text" id="new-password" name="new-password" placeholder="New Password" required/>
      <input type="text" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required/>
      <button type="submit"><a href="/signin">Submit</a></button>
    </form>
  </div>
  )
}

export default NewPassword
