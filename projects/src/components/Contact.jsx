import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get in touch with us</h2>
        <p>
          We Rakt Daan are a charitable and non-profit organization. We provide the service of collecting blood and donating it to needy patients who are fighting for their lives. We encourage young blood donors and provide the certificate of "Veer Jaan."
        </p>
        <br />
        <address>
          <p><FaMapMarkerAlt /> Rohini Sector-5, <br/>North Delhi 110085</p>
          <p><FaPhoneAlt /> Phone: 011 3345 5478</p>
          <p><FaEnvelope /> raktdaan@gmail.com</p>
        </address>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input type="text" name="firstName" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" name="lastName" />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input type="tel" name="phoneNumber" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message"></textarea>
          </div>
          <Button type="submit" variant="outline-danger">Send message</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
