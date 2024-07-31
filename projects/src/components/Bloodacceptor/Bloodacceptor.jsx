import './Bloodacceptor.css';

function Bloodacceptor() {
  return (
    <>
      <form className="form-container">
        <div className="form-group">
          <label>What type of blood you need ?</label>
          <div className="radio-group">
            {['O Positive', 'O Negative', 'A Positive', 'A Negative', 'B Positive', 'B Negative', 'AB Positive', 'AB Negative'].map((type) => (
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
          <label>How much blood do you need?<br>
          </br>(In Bottles i.e 460 ml)</label><br>
          </br><br></br>
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
        <div className="form-group">
          <label>Full Name</label>
          <div className="name-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Birth Date</label>
          <div className="birth-date-group">
            <input
            type="date"
            name="birthdate"
            ></input>
          </div>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
              />
              Female
            </label>
          </div>
        </div>
        <div className="contact-details">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number here"
          />
        </div>
        <div className="contact-details">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your phone Email here"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Bloodacceptor;