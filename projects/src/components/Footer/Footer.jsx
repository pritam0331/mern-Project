import React from "react";
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="row1">
        <div className="head">
          <p>Rakt <span className="span1"> Daan</span></p>

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
          <p>&copy; Rakt <span className="span2">Daan</span> 2024 , we love our users</p>
        </div>
        <div className="policy">
          <a href="/privacy">Privacy & Policies</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;