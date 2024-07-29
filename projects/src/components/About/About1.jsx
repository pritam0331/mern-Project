import React, { useRef } from 'react';
import './About1.css';

function About1() {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    marqueeRef.current.stop();
  };

  const handleMouseOut = () => {
    marqueeRef.current.start();
  };

  return (
    <div className="about-container">
      <h1 className="head">Why choose Rakt Daan</h1>
      <div className="box1">
        <div className="container">
          <div className="img1">
            <img src="https://www.shutterstock.com/image-vector/blood-collection-transfusion-icon-donor-600nw-2129911235.jpg" alt="Sample Collection" />
            <p>Free & On-time Sample Collection</p>
          </div>
          <div className="img1">
            <img src="https://www.shutterstock.com/image-vector/blood-test-tube-cartoon-vector-600nw-2431506631.jpg" alt="Free Report" />
            <p>Free Report Counselling and Consultation</p>
          </div>
          <div className="img1">
            <img src="https://static.vecteezy.com/system/resources/previews/004/897/637/non_2x/location-red-icon-simple-design-free-vector.jpg" alt="Franchise" />
            <p>Franchise Opportunity</p>
          </div>
          <div className="img1">
            <img src="https://media.istockphoto.com/id/954478248/vector/love-timer.jpg?s=612x612&w=0&k=20&c=XLRybEWTuZNmJ1Def7z6UV-ULz3pCOVvfTWgP-KT-rk=" alt="abc" />
            <p>A vast inventory of more than 30000+</p>
          </div>
        </div>
        <div className="box">
          <h3 id="boxHeading">Important Information</h3>
          <hr />
          <marquee
            direction="up"
            scrollamount="3"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            ref={marqueeRef}
          >
            <ul style={{ padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 15 }}>
                <a href="https://indianexpress.com/about/blood-donation-camp/" className='a' target='_blank'>Blood Donation Camp News</a>
              </li>
              <li style={{ marginBottom: 15 }}>
                <a href="https://health.economictimes.indiatimes.com/news/industry/in-extreme-heat-ahmedabad-blood-banks-run-dry/110389598?utm_source=top_news&utm_medium=tagListing" className='a' target='_blank'>
                  In extreme heat, Ahmedabad blood banks run dry
                </a>
              </li>
              <li style={{ marginBottom: 15 }}>
                <a href="https://health.economictimes.indiatimes.com/news/industry/ways-to-address-indias-blood-donation-and-supply-crisis/101351499?utm_source=top_news&utm_medium=tagListing" className='a' target='_blank'>
                  Ways to address India's blood donation and supply crises
                </a>
              </li>
              <li style={{ marginBottom: 15 }}>
                <a href="https://health.economictimes.indiatimes.com/healthcare-leaders-summit?ag=events_listing&utm_source=events_listing&utm_medium=eventListing" className='a' target='_blank'>
                  ET HealthCare Summit 2024
                </a>
              </li>
              <li style={{ marginBottom: 15 }}>
                <a href="https://www.thehindu.com/news/national/india-created-a-new-blood-donation-record-health-ministry/article65903863.ece" className='a' target='_blank'>
                  Over 87,000 people donated blood
                </a>
              </li>
              <li style={{ marginBottom: 15 }}>
                <a href="https://www.hindustantimes.com/cities/lucknow-news/people-in-india-not-donating-enough-blood-doctors-101696426808180.html" className='a' target='_blank'>
                  People in India not donating enough blood: Doctors
                </a>
              </li>
              <li style={{ marginBottom: 15 }}>
                <a href="https://www.ndtv.com/topic/blood-donation" className='a' target='_blank'>More Information</a>
              </li>
            </ul>
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default About1;
