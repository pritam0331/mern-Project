import { useState } from 'react';
import './BloodAcceptor.css';

function BloodAcceptor() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [bloodtype, setBloodType] = useState('');
  const [bloodneed, setBloodNeed] = useState(1);
  const [gender, setGender] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    const currentYear = new Date().getFullYear();
    const inputYear = new Date(dob).getFullYear();
    
    if (!bloodtype) formErrors.bloodtype = "*Please select a blood type";
    if (!fname.trim()) formErrors.fname = "*First name is required";
    if (!lname.trim()) formErrors.lname = "*Last name is required";
    
    if (!dob) formErrors.dob = "*Date of birth is required";
    else if (inputYear > currentYear) formErrors.dob = "*Year of birth cannot be in the future";
    if (!gender) formErrors.gender = "*Please select a gender";
    if (!phoneno.trim()) formErrors.phoneno = "*Phone number is required";
    else if (!/^\d{10}$/.test(phoneno)) formErrors.phoneno = "*Invalid phone number format";
    if (!email.trim()) formErrors.email = "*Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "*Invalid email format";


    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log({ bloodtype, bloodneed, fname, lname, dob, gender, phoneno, email });
        let result = await fetch('http://localhost:3001/bloodacc', {
          method: 'POST',
          body: JSON.stringify({ bloodtype, bloodneed, fname, lname, dob, gender, phoneno, email }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        result = await result.json();
        console.log(result);
        alert("Successfully submitted");
      } catch (error) {
        console.error(error);
        alert('Error');
      }
    }
  };

  function calculatePrice() {
    return bloodneed * 450;
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group1">
          <label className='label'>What type of blood do you need?</label>
          <div className="radio-group">
            {['O +', 'O -', 'A +', 'A -', 'B +', 'B -', 'AB +', 'AB -'].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="bloodType"
                  value={type}
                  onChange={(e) => setBloodType(e.target.value)}
                />
                {type}
              </label>
            ))}
          </div>
          {errors.bloodtype && <span className="error">{errors.bloodtype}</span>}
        </div>
        <div>
          <label className='label'>How much blood do you need? (In Bottles i.e 460 ml)</label><br />
          <select
            name='blood'
            className='input-fields'
            value={bloodneed}
            onChange={(e) => setBloodNeed(parseInt(e.target.value))}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map(number => (
              <option key={number} value={number}>{number}</option>
            ))}
          </select>
        </div><br />
        <div className="form-group1">
          <label className='label'>Full Name</label>
          <div className="name-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className='input-fields'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className='input-fields'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            </div>
            <div className='errors'>
            {errors.fname && <span className="error2">{errors.fname}</span>}
            {errors.lname && <span className="error2">{errors.lname}</span>}
            </div>
        </div>
        <div className="form-group1">
          <label className='label'>Birth Date</label>
          <div className="birth-date-group">
            <input
              type="date"
              name="birthdate"
              className='input-fields'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>
        <div className="form-group1">
          <label className='label'>Gender</label>
          <div className="radio-group">
            <label className='label'>
              <input
                type="radio"
                name="gender"
                value="Male"
                className='radio-groups'
                onChange={(e) => setGender(e.target.value)}
              />
              &nbsp;Male
            </label>
            <label className='label'>
              <input
                type="radio"
                name="gender"
                value="Female"
                className='radio-groups'
                onChange={(e) => setGender(e.target.value)}
              />
              &nbsp;Female
            </label>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div className="contact-details">
          <label className='label'>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number here"
            className='input-fields'
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
          />
          {errors.phoneno && <span className="error">{errors.phoneno}</span>}
        </div>
        <div className="contact-details">
          <label className='label'>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email here"
            className='input-fields'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="btn-container">
          <button type="submit" className='btn9'>Pay ₹{calculatePrice()}</button>
        </div>
      </form>
    </>
  );
}

export default BloodAcceptor;