import { useState } from 'react';
import './Bloodacceptor.css';

function BloodAcceptor() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [bloodtype, setBloodType] = useState('');
  const [bloodneed, setBloodNeed] = useState(1);
  const [gender, setGender] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="bloodType"
                  value={type}
                  onChange={(e) => setBloodType(e.target.value)}
                  required
                />
                {type}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className='label'>How much blood do you need? (In Bottles i.e 460 ml)</label><br />
          <select
            name='blood'
            className='input-fields'
            value={bloodneed}
            onChange={(e) => setBloodNeed(parseInt(e.target.value))}
            required
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
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className='input-fields'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
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
              required
            />
          </div>
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
                required
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
                required
              />
              &nbsp;Female
            </label>
          </div>
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
            required
          />
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
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit" className='btn9'>Pay ₹;{calculatePrice()}</button>
        </div>
      </form>
    </>
  );
}

export default BloodAcceptor;
