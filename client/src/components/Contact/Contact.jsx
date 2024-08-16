import React, { useState } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      offset: 200,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstname, lastname, email, phoneNumber, message } = formData;

    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: { firstname, lastname },
          email,
          phone: phoneNumber,
          message,
        }),
      });

      if (response.status === 201) {
        alert('Contact form data saved successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        alert('Failed to save data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info" data-aos="fade-right">
        <h2>Get in touch with us</h2>
        <p>
          We provide
          the service of collecting blood and donating it to needy patients who
          are fighting for their lives. We encourage young blood donors and
          provide the certificate of "Veer Jaan."
        </p>
        <br />
        <address>
          <p><FaMapMarkerAlt /> Rohini Sector-5, <br />North Delhi 110085</p>
          <p><FaPhoneAlt /> Phone: 011 3345 5478</p>
          <p><FaEnvelope /> raaktdaann@gmail.com </p>
        </address>
      </div>
      <div className="contact-form" data-aos="fade-left">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
