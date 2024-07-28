import React from 'react';
import './Termsandcond.css';

const Termsandcond = () => {
  return (
    <div className="termsandcond-container">
      <h1>Terms and Conditions</h1><br></br>
      <p>Welcome to RaktDaan! Please read these terms and conditions carefully before using our website.</p>

      <div className="terms-section">
        <h2>1. General Information</h2>
        <p>By accessing this website, you agree to comply with these terms and conditions. If you do not agree, please do not use the site.</p><br></br>
      </div>

      <div className="terms-section">
        <h2>2. Eligibility and Donor Requirements</h2>
        <ul>
          <li>Users must be at least 18 years old to donate blood.</li>
          <li>Donors must weigh at least 50 kg.</li>
          <li>Donors must not have any major medical conditions or diseases.</li>
        </ul>
      </div>

      <div className="terms-section"><br></br>
        <h2>3. Privacy Policy</h2>
        <p>We are committed to protecting your privacy. Please refer to our Privacy Policy for information on how we handle your personal data.</p>
      </div>

      <div className="terms-section"><br></br>
        <h2>4. Use of Information</h2>
        <ul>
          <li>The information provided on RaktDaan is for general informational purposes only.</li>
          <li>We do not guarantee the accuracy or completeness of the information provided.</li>
          <li>Use of the website is at your own risk.</li>
        </ul>
      </div>

      <div className="terms-section"><br></br>
        <h2>5. Liability Disclaimer</h2>
        <ul>
          <li>RaktDaan is not liable for any damages arising from the use of this website.</li>
          <li>We do not endorse any third-party services or information linked on the site.</li>
        </ul>
      </div>

      <div className="terms-section"><br></br>
        <h2>6. Amendments</h2>
        <p>We reserve the right to update these terms and conditions at any time. Please check this page regularly for updates.</p>
      </div>

      <div className="terms-section"><br></br>
        <h2>7. Contact Information</h2>
        <p>If you have any questions or concerns, please contact us at <a href="mailto:support@raktdaan.com">support@raktdaan.com</a>.</p>
      </div>
    </div>
  );
};


export default Termsandcond;


