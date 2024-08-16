import React from 'react';
import './PrivacyAndPolicy.css';

function PrivacyAndPolicy() {
  return (
    <div className="privandpol-container">
      <h1 className="privandpol-title">Privacy Policy</h1><br></br>

      <section className="privandpol-section">
        <p>
          Welcome to RaktDaan, a platform dedicated to facilitating blood donations. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our services.
        </p>
      </section>

      <section className="privandpol-section">
        <h2>Information We Collect</h2>
        <h3>Personal Information:</h3>
        <p>
          We may collect personal information such as your name, contact details, and other identifying information when you register on our site, subscribe to our newsletter, or participate in blood donation drives.
        </p>
        <h3>Non-Personal Information:</h3>
        <p>
          We also collect non-personal information such as browser type, device type, and website usage data to improve our services.
        </p>
      </section>

      <section className="privandpol-section">
        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Facilitate blood donation processes</li>
          <li>Communicate with you regarding our services and updates</li>
          <li>Improve our website and services</li>
          <li>Comply with legal requirements</li>
        </ul>
      </section>

      <section className="privandpol-section">
        <h2>Data Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to protect our rights.
        </p>
      </section>

      <section className="privandpol-section">
        <h2>Data Security</h2>
        <p>
          We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="privandpol-section">
        <h2>Your Choices and Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. You can also opt out of receiving marketing communications from us.
        </p>
      </section>

      <section className="privandpol-section">
        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar technologies to enhance your experience on our site. You can control cookies through your browser settings.
        </p>
      </section>

      <section className="privandpol-section">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section className="privandpol-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions/queries, please contact us at:
        </p>
        <p>Email:</p>
        <div className='support'>
            <p className='support'>support@raaktdaann.com</p>
            </div>
      </section>
    </div>
  );
}

export default PrivacyAndPolicy;