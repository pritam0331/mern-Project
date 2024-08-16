import React, { useState } from 'react';
import "./Doner.css";

function Doner() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [bloodtype, setBloodType] = useState('');
  const [blooddonate, setBloodDonate] = useState("1");
  const [donated, setDonated] = useState(null);
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!bloodtype) formErrors.bloodtype = "*Please select a blood type";
    if (!fname.trim()) formErrors.fname = "*First name is required";
    if (!lname.trim()) formErrors.lname = "*Last name is required";
    if (!dob) formErrors.dob = "*Date of birth is required";
    if (!gender) formErrors.gender = "*Please select a gender";
    if (!contact.trim()) formErrors.contact = "*Phone number is required";
    else if (!/^\d{10}$/.test(contact)) formErrors.contact = "*Invalid phone number format (should be xxxxx-xxxxx)";
    if (!email.trim()) formErrors.email = "*Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "*Invalid email format";
    if (donated === null) formErrors.donated = "*Please select a donation status";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3001/blooddon', {
          method: 'POST',
          body: JSON.stringify({ bloodtype, blooddonate, fname, lname, dob, contact, email, gender, donated }),
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
    }
  };

  const bloodTypes = ['O +', 'O -', 'A +', 'A -', 'B +', 'B -', 'AB +', 'AB -'];

  return (
    <div>
      <div className="form-container-doner">
        <h1 className='med-doner'>Medical Blood Donation Consent Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='bigCon-doner'>
            <p className='type-doner'>What is your blood type?</p>
            <div className="container-doner">
              {bloodTypes.map((type) => (
                <div key={type} className="option-doner">
                  <input 
                    type="radio" 
                    name="bloodType" 
                    id={type} 
                    className="radio-doner" 
                    value={type} 
                    onChange={(e) => setBloodType(e.target.value)} 
                    checked={bloodtype === type}
                  />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>
            {errors.bloodtype && <span className='error'>{errors.bloodtype}</span>}
          </div>

          <div className="blood-doner">
            <label htmlFor="bloodAmount" className="blood-label">
              How much blood are you donating? (In Bottles i.e 460 ml)
            </label>
            <select 
              id="bloodAmount" 
              name="bloodAmount" 
              className="select-doner"
              value={blooddonate}
              onChange={(e) => setBloodDonate(e.target.value)}
            >
              {[1, 2, 3].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <label htmlFor="first-name">Name:</label>
          <div>
            <div className="name-field-doner">
              <input type="text" id="first-name" name="first-name" placeholder="First" className="text-doner" value={fname} onChange={(e) => setFname(e.target.value)} />
              <input type="text" id="last-name" name="last-name" placeholder="Last" className="text-doner" value={lname} onChange={(e) => setLname(e.target.value)} />
            </div>
            <div className='errors'>
              {errors.fname && <span className="error2">{errors.fname}</span>}
              {errors.lname && <span className="error2">{errors.lname}</span>}
            </div>
          </div>

          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" placeholder="MM/DD/YYYY" className="date-doner" value={dob} onChange={(e) => setDob(e.target.value)} />
          {errors.dob && <span className="error">{errors.dob}</span>}

          <label htmlFor="phone">Phone number:</label>
          <input type="tel" id="phone" name="phone" placeholder="xxxxx-xxxxx" className="tel-doner" value={contact} onChange={(e) => setContact(e.target.value)} />
          {errors.contact && <span className="error">{errors.contact}</span>}

          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" name="email" placeholder="Email address" className="email-doner" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className="error">{errors.email}</span>}

          <legend className="legend-doner">Gender</legend>
          <div className="gender-options-doner">
            {['Male', 'Female'].map((genderOption) => (
              <div key={genderOption}>
                <input 
                  type="radio" 
                  id={genderOption.toLowerCase()} 
                  name="gender" 
                  className="radio-doner" 
                  value={genderOption} 
                  onChange={(e) => setGender(e.target.value)} 
                  checked={gender === genderOption}
                />
                <label htmlFor={genderOption.toLowerCase()}>{genderOption}</label>
              </div>
            ))}
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}

          <label className='prev-doner'>Have you donated previously?</label>
          <div className="radio-group-doner">
            {['Yes', 'No'].map((option) => (
              <div key={option}>
                <input 
                  type="radio" 
                  id={`donated-${option.toLowerCase()}`} 
                  name="donated-previously" 
                  className="radio-doner" 
                  onChange={() => setDonated(option === 'Yes')}
                  checked={donated === (option === 'Yes')}
                />
                <label htmlFor={`donated-${option.toLowerCase()}`}>{option}</label>
              </div>
            ))}
          </div>
          {errors.donated && <span className="error">{errors.donated}</span>}

          <div className='submitt-doner'>
            <input type="submit" className="submit-doner" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Doner;
