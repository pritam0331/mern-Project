import React, { useState } from 'react'
import "./Doner.css"
function Doner() {
  const [BloodType,setBloodType] = useState('')
  const [Name,setName] = useState('')
  const [Dob,setDob] = useState('')
  const [Phno,setPhno] = useState('')
  const [Email,setEmail] = useState('')
  const [Gender,setGender] = useState('')
  const [Donated,setDonated] = useState('')
  const [Extra,setExtra] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ BloodType,Name,Dob,Phno,Email,Gender,Donated,Extra });
      let result = await fetch('http://localhost:3001/blooddonate', {
        method: 'POST',
        body: JSON.stringify({ BloodType,Name,Dob,Phno,Email,Gender,Donated,Extra }),
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
  return (
    <div>
      <div className="Form-container" onSubmit={handleSubmit}>
  <h1 className='medical'>medicalical Blood Donation Consent Form</h1>
  <p className='brand'>Rakt <span className="span1"> Daan</span></p>

  <form>
     
  <div className='BigCon'>
  <p className='type'>What is your blood type?</p>
  <div className="containers">
    <div className="options">
      <input type="radio" name="bloodType" id="oPositive" value={BloodType} onChange={(e)=>setBloodType(e.target.value)}/>
      <label htmlFor="oPositive">O Rh+</label>
    </div>
    <div className="options">
      <input type="radio" name="bloodType" id="oNegative" value={BloodType} onChange={(e)=>setBloodType(e.target.value)}/>
      <label htmlFor="oNegative">O Rh-</label>
    </div>
  </div>
  <div className="containers">
    <div className="options">
      <input type="radio" name="bloodType" id="aPositive" value={BloodType} onChange={(e)=>setBloodType(e.target.value)}/>
      <label htmlFor="aPositive">A Rh+</label>
    </div>
    <div className="options">
      <input type="radio" name="bloodType" id="aNegative" value={BloodType} onChange={(e)=>setBloodType(e.target.value)}/>
      <label htmlFor="aNegative">A Rh-</label>
    </div>
  </div>
  <div className="containers">
    <div className="options">
      <input type="radio" name="bloodType" id="bPositive" value={BloodType} onChange={(e)=>setBloodType(e.target.value)}/>
      <label htmlFor="bPositive">B Rh+</label>
    </div>
    <div className="options">
      <input type="radio" name="bloodType" id="bNegative" value={BloodType} onChange={(e)=>setBloodType(e.target.value)}/>
      <label htmlFor="bNegative">B Rh-</label>
    </div>
  </div>
  <div className="containers">
    <div className="options">
      <input type="radio" name="bloodType" id="abPositive" value={BloodType} onChange={(e)=>setBloodType(e.target.value)}/>
      <label htmlFor="abPositive">AB Rh+</label>
    </div>
    <div className="options">
      <input type="radio" name="bloodType" id="abNegative" value={BloodType} onChange={(e)=>setBloodType(e.target.value)}/>
      <label htmlFor="abNegative">AB Rh-</label>
    </div>
  </div>
</div>

    
    <label htmlFor="First-name">Name:</label>
    <div className="Name-field">
      <input
        type="text"
        id="First-name"
        name="First-name"
        placeholder="First"
        className='text'
        value={Name}
        onChange={(e)=>setName(e.target.value)}
      />

      
      <input type="text" id="last-name" name="last-name" placeholder="Last" className='text' value={Name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <label htmlFor="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" placeholder="MM/DD/YYYY" className='text' value={Dob} onChange={(e)=>setDob(e.target.value)}/>
    <label htmlFor="phone">Phone number:</label>
    <input type="tel" id="phone" name="phone" placeholder="" className='text' value={Phno} onChange={(e)=>setPhno(e.target.value)}/>
    <label htmlFor="email">Email address:</label>
    <input type="email" id="email" name="email" placeholder="Email address" className='text' value={Email} onChange={(e)=>setEmail(e.target.value)}/>

  
  
    <legend>Gender</legend>
    <div className="Gender-options">
      <div>
        <input type="radio" id="male" name="gender" defaultValue="male" value={Gender} onChange={(e)=>setGender(e.target.value)}/>
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          defaultValue="female"
          value={Gender} onChange={(e)=>setGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>

    <label className='Prev'>Have you donated previously?</label>
    <div className="radio-group">
      <input
        type="radio"
        id="donated-yes"
        name="donated-previously"
        defaultValue="yes"
        value={Donated}
        onChange={(e)=>setDonated(e.target.value)}
      />
      <label htmlFor="donated-yes">Yes</label>
      <input
        type="radio"
        id="donated-no"
        name="donated-previously"
        defaultValue="no"
        value={Donated}
        onChange={(e)=>setDonated(e.target.value)}
      />
      <label htmlFor="donated-no">No</label>
    </div>
    <label>In the last six months have you had any of the following?</label>
    <div className="Checkbox-Group">
      <input type="checkbox" id="tattooing" name="tattooing" value={Extra} onChange={(e)=>setExtra(e.target.value)}/>
      <label htmlFor="tattooing">Tattooing</label>
      <input type="checkbox" id="piercing" name="piercing" value={Extra} onChange={(e)=>setExtra(e.target.value)}/>
      <label htmlFor="piercing">Piercing</label>
      <input type="checkbox" id="dental" name="dental" value={Extra} onChange={(e)=>setExtra(e.target.value)}/>
      <label htmlFor="dental">Dental extraction</label>
    </div>

    <div className='Submitt'>
      
      <input  type="submit" />
      <input  type="reset" />
    </div>

  </form>
</div>

    </div>
  )
}

export default Doner