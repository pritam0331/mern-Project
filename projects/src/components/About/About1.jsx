import React from 'react'
import './About1.css'
function About1() {
  return (
    <div>
    <h1 className='head'>Why choose Rakt Daan</h1>
    <div className='box1'>
    <div className='container'>
    <div className="img1">
    <img src='https://www.shutterstock.com/image-vector/blood-collection-transfusion-icon-donor-600nw-2129911235.jpg' alt='Sample Collection'></img>
        <p>Free & On-time Sample Collection</p>
      </div>
      <div className="img1">
      <img src='https://www.shutterstock.com/image-vector/blood-test-tube-cartoon-vector-600nw-2431506631.jpg' alt='Free Report'></img>
        <p>Free Report Counselling and Consultation</p>
      </div>
      <div className="img1">
      <img src='https://static.vecteezy.com/system/resources/previews/004/897/637/non_2x/location-red-icon-simple-design-free-vector.jpg' alt='Franchise'></img>
        <p>Franchise Opportunity</p>
      </div>
      <div className="img1">
        <img src='https://media.istockphoto.com/id/954478248/vector/love-timer.jpg?s=612x612&w=0&k=20&c=XLRybEWTuZNmJ1Def7z6UV-ULz3pCOVvfTWgP-KT-rk=' alt='abc'></img>
        <p>A vast inventory of more than 30000+</p>
      </div>
    </div>
    <div className='box'>
      <h3 id='boxHeading'>Important Information</h3>
      <marquee direction="up" scrollamount="2">
      <ol style={{ padding: 0, margin: 0 }}>
        <li  style={{ marginBottom: 20 }}><a href='https://indianexpress.com/about/blood-donation-camp/'>Blood Donation Camp News</a></li>
        <li style={{ marginBottom: 20 }}><a href='https://health.economictimes.indiatimes.com/news/industry/in-extreme-heat-ahmedabad-blood-banks-run-dry/110389598?utm_source=top_news&utm_medium=tagListing'>In extreme head, Ahmedabad blood banks run dry</a></li>
        <li style={{ marginBottom: 20 }}><a href='https://health.economictimes.indiatimes.com/news/industry/ways-to-address-indias-blood-donation-and-supply-crisis/101351499?utm_source=top_news&utm_medium=tagListing'>Ways to address India's blood donation and supply crises</a></li>
        <li style={{ marginBottom: 20 }}><a href='https://health.economictimes.indiatimes.com/healthcare-leaders-summit?ag=events_listing&utm_source=events_listing&utm_medium=eventListing'>ET HealthCare Summit 2024</a></li>
        <li style={{ marginBottom: 20 }}><a href='https://www.thehindu.com/news/national/india-created-a-new-blood-donation-record-health-ministry/article65903863.ece'>Over 87,000 people donated blood</a></li>
        <li style={{ marginBottom: 20 }}><a href='https://www.hindustantimes.com/cities/lucknow-news/people-in-india-not-donating-enough-blood-doctors-101696426808180.html'>People in India not donating enough blood: Doctors</a></li>
        <li style={{ marginBottom: 20 }}><a href='https://www.ndtv.com/topic/blood-donation'>More Information</a></li>
      </ol>
      </marquee>
    </div>
    </div>
  </div> 
  )
}

export default About1