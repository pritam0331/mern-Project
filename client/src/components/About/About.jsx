import React from 'react';
import './About.css'
import img from './image1.png'
import img1 from './image2.png'
import img2 from './image3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    AOS.init({
      duration: 600,
      easing: 'linear',
      offset: 200,
    })
  return (
    <>
      <div className="profile-card">
        <div className="profile-image" data-aos="zoom-in-left">
          <img src={img} alt="Profile" />
        </div>
        <div className="profile-content" data-aos="zoom-in-right">
          <h2 className='text'>1. The Importance of Blood Donation</h2>
          <p>
            Blood donation is a critical and selfless act that saves millions of lives every year. 
            Every two seconds, someone in the world requires a blood transfusion, whether it’s for surgeries,
             cancer treatments, chronic illnesses, or traumatic injuries. By donating blood, you are giving a 
             priceless gift that can mean the difference between life and death for those in need. The demand 
             for blood is constant, and the supply must be continually replenished to ensure that it is available 
             whenever and wherever it is needed. Your single donation can potentially save up to three lives, making
            the impact of your contribution truly profound.
          </p>
        </div>
      </div>
      <div className="profile-card">
        <div className="profile-content" data-aos="zoom-in-left">
        <h2 className='text'>2. The Process of Donating Blood</h2>
          <p>
          Donating blood is a simple, safe, and quick process that typically takes about an hour from start to finish. 
          The process begins with a brief health screening where a medical professional checks your vital signs and 
          assesses your eligibility to donate. This ensures that both the donor and the recipient are protected. 
          The actual donation usually takes about 10 minutes, during which time approximately one pint of blood is collected. 
          After the donation, donors are provided with refreshments and encouraged to rest for a short period to ensure they 
          feel well before resuming their day. Throughout the process, sterile and disposable equipment is used to guarantee 
          the highest standards of safety and hygiene.
          </p>
        </div>
        <div className="profile-image" data-aos="zoom-in-right">
          <img src={img1} />
        </div>
      </div>
      <div className="profile-card">
        <div className="profile-image" data-aos="zoom-in-left">
          <img src={img2}/>
        </div>
        <div className="profile-content" data-aos="zoom-in-right">
        <h2 className='text'>3. Benefits of Donating Blood</h2>
          <p>
          The benefits of donating blood extend beyond the lives saved; donors also experience positive effects. 
          Regular blood donation helps to maintain healthy iron levels in the body, which can reduce the risk of 
          certain health conditions, such as hemochromatosis. Moreover, the act of giving blood is a fulfilling 
          and altruistic experience, often leaving donors with a sense of satisfaction and connection to their community. 
          Many donors report feeling a profound sense of purpose and gratitude knowing that their blood may be used to help 
          someone recover from a critical illness or survive a life-threatening injury. Additionally, blood donation centers 
          frequently offer incentives such as free health screenings and donor recognition programs.
          </p>
        </div>
      </div>
      <div className="profile-card">
        <div className="profile-content" data-aos="zoom-in-left">
        <h2 className='text'>4. How to Get Involved</h2>
          <p>
          Getting involved in blood donation is straightforward and rewarding. 
          Start by finding a local blood donation center or participating in a blood drive 
          organized by community groups, schools, or workplaces. Many organizations provide 
          convenient online scheduling, making it easy to find a time that fits your schedule. 
          It’s important to stay informed about eligibility requirements and donation frequency 
          guidelines to ensure a smooth and efficient process. Additionally, consider becoming 
          an advocate for blood donation by encouraging friends, family, and colleagues to donate. 
          Sharing your own experiences and the impact of your donation can inspire others to join 
          this life-saving mission. Remember, every donation counts, and by coming together as a community, 
          we can ensure a steady and reliable blood supply for those in need.
          </p>
        </div>
        <div className="profile-image" data-aos="zoom-in-right">
          <img src={img}/>
        </div>
      </div>
    </>
  );
};

export default About;