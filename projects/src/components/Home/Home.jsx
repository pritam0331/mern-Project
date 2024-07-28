import React from 'react'
import FAQ from '../FAQ/FAQ.jsx'
import About1 from '../About/About1.jsx'
import img from '../About/image3.png'
import './Home.css'

function Home() {
  return (
    <div>
        <div className="profile-cards">
        <div className="profile-images">
          <img src={img} alt="Profile" />
        </div>
        <div className="profile-contents">
          <p>
          Welcome to RAKTDAAN, your trusted partner in saving lives through blood donation. 
          Our mission is to ensure a safe and reliable supply of blood and blood products to 
          those in need, fostering a community of compassionate donors who understand the 
          profound impact of their generosity. Every day, we strive to create awareness about 
          the importance of blood donation, encouraging individuals from all walks of life to 
          contribute to this vital cause. Our dedicated team works tirelessly to coordinate 
          donation drives, manage blood collection, and ensure the safe and efficient 
          distribution of blood to hospitals and clinics. We are committed to educating 
          the public about the critical need for blood donations and the life-saving potential 
          of each contribution. By partnering with local businesses, schools, and community organizations, 
          we aim to make blood donation accessible and convenient for everyone. 
          </p>
          <button id='btn'><a href="/about">Read More</a></button>
        </div>
       
      </div>
        <About1/>
        <FAQ/>
    </div>
  )
}

export default Home