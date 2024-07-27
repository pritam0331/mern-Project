import React from "react";
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="row1">
        <div className="head">
          <p>Rakt <span className="span"> Daan</span></p>

        </div>
        <div className="socials">
          <FaFacebook />
          <FaInstagram />
          <FaWhatsapp />
          <FaTwitter />
        </div>
      </div>
      <hr className="hr1" />
      <div className="foot">
        <div className="content">
          <p>&copy; Rakht daan 2024 , we love our users</p>
        </div>
        <div className="policy">
          <a href="/privacy-policies">Privacy & Policies</a>
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;