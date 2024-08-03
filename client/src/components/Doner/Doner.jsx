import React from 'react'
import "./Doner.css"

function Doner() {
  return (
    <div>
      <div className="form-container-doner">
        <h1 className='med-doner'>Medical Blood Donation Consent Form</h1>
        <p className='brand-doner'>Rakt <span className="span1-doner"> Daan</span></p>
        <form>
          <div className='bigCon-doner'>
            <p className='type-doner'>What is your blood type?</p>
            <div className="container-doner">
              <div className="option-doner">
                <input type="radio" name="bloodType" id="oPositive" className="radio-doner" />
                <label htmlFor="oPositive">O Rh+</label>
              </div>
              <div className="option-doner">
                <input type="radio" name="bloodType" id="oNegative" className="radio-doner" />
                <label htmlFor="oNegative">O Rh-</label>
              </div>
            </div>
            <div className="container-doner">
              <div className="option-doner">
                <input type="radio" name="bloodType" id="aPositive" className="radio-doner" />
                <label htmlFor="aPositive">A Rh+</label>
              </div>
              <div className="option-doner">
                <input type="radio" name="bloodType" id="aNegative" className="radio-doner" />
                <label htmlFor="aNegative">A Rh-</label>
              </div>
            </div>
            <div className="container-doner">
              <div className="option-doner">
                <input type="radio" name="bloodType" id="bPositive" className="radio-doner" />
                <label htmlFor="bPositive">B Rh+</label>
              </div>
              <div className="option-doner">
                <input type="radio" name="bloodType" id="bNegative" className="radio-doner" />
                <label htmlFor="bNegative">B Rh-</label>
              </div>
            </div>
            <div className="container-doner">
              <div className="option-doner">
                <input type="radio" name="bloodType" id="abPositive" className="radio-doner" />
                <label htmlFor="abPositive">AB Rh+</label>
              </div>
              <div className="option-doner">
                <input type="radio" name="bloodType" id="abNegative" className="radio-doner" />
                <label htmlFor="abNegative">AB Rh-</label>
              </div>
            </div>
          </div>
          <label htmlFor="first-name">Name:</label>
          <div className="name-field-doner">
            <input type="text" id="first-name" name="first-name" placeholder="First" className="text-doner" />
            <input type="text" id="last-name" name="last-name" placeholder="Last" className="text-doner" />
          </div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" placeholder="MM/DD/YYYY" className="date-doner" />
          <label htmlFor="phone">Phone number:</label>
          <input type="tel" id="phone" name="phone" placeholder="" className="tel-doner" />
          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" name="email" placeholder="Email address" className="email-doner" />
          <legend className="legend-doner">Gender</legend>
          <div className="gender-options-doner">
            <div>
              <input type="radio" id="male" name="gender" value="male" className="radio-doner" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" className="radio-doner" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <label className='prev-doner'>Have you donated previously?</label>
          <div className="radio-group-doner">
            <input type="radio" id="donated-yes" name="donated-previously" value="yes" className="radio-doner" />
            <label htmlFor="donated-yes">Yes</label>
            <input type="radio" id="donated-no" name="donated-previously" value="no" className="radio-doner" />
            <label htmlFor="donated-no">No</label>
          </div>
          <label>In the last six months have you had any of the following?</label>
          <div className="checkbox-group-doner">
            <input type="checkbox" id="tattooing" name="tattooing" className="checkbox-doner" />
            <label htmlFor="tattooing">Tattooing</label>
            <input type="checkbox" id="piercing" name="piercing" className="checkbox-doner" />
            <label htmlFor="piercing">Piercing</label>
            <input type="checkbox" id="dental" name="dental" className="checkbox-doner" />
            <label  htmlFor="dental">Dental extraction</label>
          </div>
          <div className='submitt-doner'>
            <input type="submit" className="submit-doner" />
            <input type="reset" className="reset-doner" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Doner
