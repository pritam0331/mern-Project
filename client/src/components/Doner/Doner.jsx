import React from 'react'
import "./Doner.css"
function Doner() {
  return (
    <div>
      <div className="form-container">
  <h1 className='med'>Medical Blood Donation Consent Form</h1>
  <p className='brand'>Rakt <span className="span1"> Daan</span></p>

  <form>
     
  <div className='bigCon'>
  <p className='type'>What is your blood type?</p>
  <div className="container">
    <div className="option">
      <input type="radio" name="bloodType" id="oPositive" />
      <label htmlFor="oPositive">O Rh+</label>
    </div>
    <div className="option">
      <input type="radio" name="bloodType" id="oNegative" />
      <label htmlFor="oNegative">O Rh-</label>
    </div>
  </div>
  <div className="container">
    <div className="option">
      <input type="radio" name="bloodType" id="aPositive" />
      <label htmlFor="aPositive">A Rh+</label>
    </div>
    <div className="option">
      <input type="radio" name="bloodType" id="aNegative" />
      <label htmlFor="aNegative">A Rh-</label>
    </div>
  </div>
  <div className="container">
    <div className="option">
      <input type="radio" name="bloodType" id="bPositive" />
      <label htmlFor="bPositive">B Rh+</label>
    </div>
    <div className="option">
      <input type="radio" name="bloodType" id="bNegative" />
      <label htmlFor="bNegative">B Rh-</label>
    </div>
  </div>
  <div className="container">
    <div className="option">
      <input type="radio" name="bloodType" id="abPositive" />
      <label htmlFor="abPositive">AB Rh+</label>
    </div>
    <div className="option">
      <input type="radio" name="bloodType" id="abNegative" />
      <label htmlFor="abNegative">AB Rh-</label>
    </div>
  </div>
</div>

    
    <label htmlFor="first-name">Name:</label>
    <div className="name-field">
      <input
        type="text"
        id="first-name"
        name="first-name"
        placeholder="First"
      />

      
      <input type="text" id="last-name" name="last-name" placeholder="Last" />
    </div>
    <label htmlFor="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" placeholder="MM/DD/YYYY" />
    <label htmlFor="phone">Phone number:</label>
    <input type="tel" id="phone" name="phone" placeholder="" />
    <label htmlFor="email">Email address:</label>
    <input type="email" id="email" name="email" placeholder="Email address" />

  
  
    <legend>Gender</legend>
    <div className="gender-options">
      <div>
        <input type="radio" id="male" name="gender" defaultValue="male" />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          defaultValue="female"
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>

    <label className='prev'>Have you donated previously?</label>
    <div className="radio-group">
      <input
        type="radio"
        id="donated-yes"
        name="donated-previously"
        defaultValue="yes"
      />
      <label htmlFor="donated-yes">Yes</label>
      <input
        type="radio"
        id="donated-no"
        name="donated-previously"
        defaultValue="no"
      />
      <label htmlFor="donated-no">No</label>
    </div>
    <label>In the last six months have you had any of the following?</label>
    <div className="checkbox-group">
      <input type="checkbox" id="tattooing" name="tattooing" />
      <label htmlFor="tattooing">Tattooing</label>
      <input type="checkbox" id="piercing" name="piercing" />
      <label htmlFor="piercing">Piercing</label>
      <input type="checkbox" id="dental" name="dental" />
      <label htmlFor="dental">Dental extraction</label>
    </div>

    <div className='submitt'>
      
      <input  type="submit" />
      <input  type="reset" />
    </div>

  </form>
</div>

    </div>
  )
}

export default Doner