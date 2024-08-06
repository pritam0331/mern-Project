import React, { useState } from 'react';
import './BloodTest.css';

const BloodTestForm = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [prefDate, setPrefDate] = useState('');
    const [appTime, setAppTime] = useState('');
    const [addComment, setAddComment] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        
        if (!fname.trim()) formErrors.fname = "*First name is required";
        if (!lname.trim()) formErrors.lname = "*Last name is required";
        
        if (!email.trim()) {
            formErrors.email = "*Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "*Email is invalid";
        }
        
        if (!phno.trim()) {
            formErrors.phno = "*Phone number is required";
        } else if (!/^\d{10}$/.test(phno)) {
            formErrors.phno = "*Phone number should be 10 digits";
        }
        
        if (!prefDate) formErrors.prefDate = "*Preferred date is required";
        if (!appTime) formErrors.appTime = "*Appointment time is required";
        
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:3001/bloodtest', {
                    method: 'POST',
                    body: JSON.stringify({fname, lname, email, phno, prefDate, appTime, addComment}),
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

    return (
        <div className="blood-test-form">
            <h2 className="blood-test-form__title">Blood Test Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="blood-test-form__full-name">
                    <label className="blood-test-form__label">Full Name</label>
                    <input type="text" placeholder="First Name" className="blood-test-form__input" value={fname} onChange={(e) => setFname(e.target.value)} />
                    {errors.fname && <span className="error">{errors.fname}</span>}
                    <input type="text" placeholder="Last Name" className="blood-test-form__input" value={lname} onChange={(e) => setLname(e.target.value)} />
                    {errors.lname && <span className="error">{errors.lname}</span>}
                </div>
                
                <div className="blood-test-form__field">
                    <label className="blood-test-form__label">Email Address</label>
                    <input type="email" placeholder="example@example.com" className="blood-test-form__input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                
                <div className="blood-test-form__field">
                    <label className="blood-test-form__label">Phone Number</label>
                    <input type="tel" placeholder="0000000000" className="blood-test-form__input" value={phno} onChange={(e) => setPhno(e.target.value)} />
                    {errors.phno && <span className="error">{errors.phno}</span>}
                </div>
                
                <div className="blood-test-form__field">
                    <label className="blood-test-form__label">Preferred Appointment Date</label>
                    <input type="date" className="blood-test-form__input" value={prefDate} onChange={(e) => setPrefDate(e.target.value)} />
                    {errors.prefDate && <span className="error">{errors.prefDate}</span>}
                </div>
                
                <div className="blood-test-form__field">
                    <label className="blood-test-form__label">Preferred Appointment Time</label>
                    <input type="time" className="blood-test-form__input" value={appTime} onChange={(e) => setAppTime(e.target.value)} />
                    {errors.appTime && <span className="error">{errors.appTime}</span>}
                </div>
                
                <div className="blood-test-form__note">
                    <p>Note: The price of Blood Test is ₹250</p>
                </div>
                
                <div className="blood-test-form__field">
                    <label className="blood-test-form__label">Additional Comments</label>
                    <textarea placeholder="Write something...(Optional)" className="blood-test-form__textarea" value={addComment} onChange={(e) => setAddComment(e.target.value)}></textarea>
                </div>
                
                <button type="submit" className="blood-test-form__submit">Submit</button>
            </form>
        </div>
    );
};

export default BloodTestForm;