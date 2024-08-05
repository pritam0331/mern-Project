import React, { useState } from 'react'
import "./Doner.css"

function Doner() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [bloodtype, setBloodType] = useState('');
  const [donated, setDonated] = useState(false);
  const [extra, setExtra] = useState([]);
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/blooddon', {
        method: 'POST',
        body: JSON.stringify({ bloodtype, fname, lname, dob, contact, email, gender, donated, extra }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      console.log(result);
      alert("Successfully submitted");
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  const handleExtraChange = (e) => {
    const value = e.target.value;
    setExtra(prev => 
      e.target.checked 
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };

  return (
    <div>
      <div className="form-container-doner">
        <h1 className='med-doner'>Medical Blood Donation Consent Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='bigCon-doner'>
            <p className='type-doner'>What is your blood type?</p>
            <div className="container-doner">
              <div className="option-doner">
                <input type="radio" name="bloodType" id="oPositive" className="radio-doner" value="O Rh+" onChange={(e) => setBloodType(e.target.value)} />
                <label htmlFor="oPositive">O Rh+</label>
              </div>
              <div className="option-doner">
                <input type="radio" name="bloodType" id="oNegative" className="radio-doner" value="O Rh-" onChange={(e) => setBloodType(e.target.value)} />
                <label htmlFor="oNegative">O Rh-</label>
              </div>
            </div>
            <div className="container-doner">
              <div className="option-doner">
                <input type="radio" name="bloodType" id="aPositive" className="radio-doner" value="A Rh+" onChange={(e) => setBloodType(e.target.value)} />
                <label htmlFor="aPositive">A Rh+</label>
              </div>
              <div className="option-doner">
                <input type="radio" name="bloodType" id="aNegative" className="radio-doner" value="A Rh-" onChange={(e) => setBloodType(e.target.value)} />
                <label htmlFor="aNegative">A Rh-</label>
              </div>
            </div>
            <div className="container-doner">
              <div className="option-doner">
                <input type="radio" name="bloodType" id="bPositive" className="radio-doner" value="B Rh+" onChange={(e) => setBloodType(e.target.value)} />
                <label htmlFor="bPositive">B Rh+</label>
              </div>
              <div className="option-doner">
                <input type="radio" name="bloodType" id="bNegative" className="radio-doner" value="B Rh-" onChange={(e) => setBloodType(e.target.value)} />
                <label htmlFor="bNegative">B Rh-</label>
              </div>
            </div>
            <div className="container-doner">
              <div className="option-doner">
                <input type="radio" name="bloodType" id="abPositive" className="radio-doner" value="AB Rh+" onChange={(e) => setBloodType(e.target.value)} />
                <label htmlFor="abPositive">AB Rh+</label>
              </div>
              <div className="option-doner">
                <input type="radio" name="bloodType" id="abNegative" className="radio-doner" value="AB Rh-" onChange={(e) => setBloodType(e.target.value)} />
                <label htmlFor="abNegative">AB Rh-</label>
              </div>
            </div>
          </div>
          <label htmlFor="first-name">Name:</label>
          <div className="name-field-doner">
            <input type="text" id="first-name" name="first-name" placeholder="First" className="text-doner" value={fname} onChange={(e) => setFname(e.target.value)}/>
            <input type="text" id="last-name" name="last-name" placeholder="Last" className="text-doner" value={lname} onChange={(e) => setLname(e.target.value)}/>
          </div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" placeholder="MM/DD/YYYY" className="date-doner" value={dob} onChange={(e) => setDob(e.target.value)}/>
          <label htmlFor="phone">Phone number:</label>
          <input type="tel" id="phone" name="phone" placeholder="xxxxx-xxxxx" className="tel-doner" value={contact} onChange={(e) => setContact(e.target.value)}/>
          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" name="email" placeholder="Email address" className="email-doner" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <legend className="legend-doner">Gender</legend>
          <div className="gender-options-doner">
            <div>
              <input type="radio" id="male" name="gender" className="radio-doner" value="Male" onChange={(e) => setGender(e.target.value)} checked={gender === "Male"}/>
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" className="radio-doner" value="Female" onChange={(e) => setGender(e.target.value)} checked={gender === "Female"}/>
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <label className='prev-doner'>Have you donated previously?</label>
          <div className="radio-group-doner">
            <input 
              type="radio" 
              id="donated-yes" 
              name="donated-previously" 
              className="radio-doner" 
              onChange={() => setDonated(true)}
              checked={donated === true}
            />
            <label htmlFor="donated-yes">Yes</label>
            <input 
              type="radio" 
              id="donated-no" 
              name="donated-previously" 
              className="radio-doner" 
              onChange={() => setDonated(false)}
              checked={donated === false}
            />
            <label htmlFor="donated-no">No</label>
          </div>
          <label>In the last six months have you had any of the following?</label>
          <div className="checkbox-group-doner">
            <input 
              type="checkbox" 
              id="tattooing" 
              name="tattooing" 
              className="checkbox-doner" 
              value="Tattooing"
              onChange={handleExtraChange}
              checked={extra.includes("Tattooing")}
            />
            <label htmlFor="tattooing">Tattooing</label>
            <input 
              type="checkbox" 
              id="piercing" 
              name="piercing" 
              className="checkbox-doner" 
              value="Piercing"
              onChange={handleExtraChange}
              checked={extra.includes("Piercing")}
            />
            <label htmlFor="piercing">Piercing</label>
            <input 
              type="checkbox" 
              id="dental" 
              name="dental" 
              className="checkbox-doner" 
              value="Dental extraction"
              onChange={handleExtraChange}
              checked={extra.includes("Dental extraction")}
            />
            <label htmlFor="dental">Dental extraction</label>
          </div>
          <div className='submitt-doner'>
            <input type="submit" className="submit-doner" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Doner