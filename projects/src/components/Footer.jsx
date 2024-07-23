import React from "react";
import "./Footer.css"; 
// import img1 from "./images/download.jpeg";
//

const Footer = () => {
  return (
   

    <footer className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <img  src='images/download.jpeg' alt="xx" />
        </div>
        <div className="footer-info">
         
          <div>
          <h4>Solution</h4>
          <ul>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Analytics</a></li>
                        <li><a href="#">Commerce</a></li>
                        <li><a href="#">Insights</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">API Status</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Legal</h4>
                    <ul>
                         <li><a href="#">Claim</a></li>
                         <li><a href="#">Privacy</a></li>
                         <li><a href="#">Terms</a></li>
                     </ul>
          </div>
        </div>
        </div>
        <hr />
        <div className="footer-mid">
          <div>
            <h4>Subsribe to our newsletter</h4>
            <p>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <div>
            <form className="footer-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            
          </div>
          
        </div>
        <hr />
        
        <div className="footer-end">
        <p>&copy; 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      
    </footer>
  );
};

export default Footer;
