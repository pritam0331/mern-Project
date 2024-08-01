import './BloodAccepter.css';

function BloodAccepter() {
  return (
    <>
      <form className="form-container">
        <div className="form-group1">
          <label className='label'>What type of blood you need ?</label>
          <div className="radio-group">
            {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="bloodType"
                  value={type}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className='label'>How much blood do you need?<br>
          </br>(In Bottles i.e 460 ml)</label><br>
          </br>
         <select name = 'blood' className='quantity-group'>
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
         <option>6</option>
         <option>7</option>
         <option>8</option>
         <option>9</option>
         <option>10</option>
         </select>
         </div><br></br>
        <div className="form-group1">
          <label className='label'>Full Name</label>
          <div className="name-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className='input-fields'
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className='input-fields'
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
            ></input>
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
              />
              Male
            </label>
            <label className='label'>
              <input
                type="radio"
                name="gender"
                value="Female"
                className='radio-groups'
              />
              Female
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
          />
        </div>
        <div className="contact-details">
          <label className='label'>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your phone Email here"
            className='input-fields'
          />
        </div>
        <button type="submit" className='btn9'>Submit</button>
      </form>
    </>
  );
}

export default BloodAccepter;