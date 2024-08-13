import React from 'react';
import './Hero.css';
import img from './image3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user'); // Replace with actual authentication logic

  const handleNavigate = (path) => {
    navigate(path);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      offset: 200,
    });
  }, []);

  return (
    <div className='Hero-section' data-aos="fade-up-right">
      <div className='Hero-content'>
        <h1 className='Hero-title'>Welcome to Rakt <span className='span4'>Daan</span></h1>
        <p className='Hero-text'>These words capture key aspects of blood donation, emphasizing its importance in saving lives, the selfless nature of donors, and the positive impact it has on society.</p>
        {auth ? (<div className='Hero-buttons'>
          <button className='Hero-button1' onClick={() => handleNavigate('/find-donor')}>Find Donor</button>
          <button className='Hero-button1' onClick={() => handleNavigate('/donate-blood')}>Donate Blood</button>
          <button className='Hero-button1' onClick={() => handleNavigate('/blood-test')}>Test Blood</button>
          </div>
        ) : (
          <>
            <a href="/signup">
            <button className='Hero-button'>Get Started</button>
          </a>
          </>
        )}
      </div>
      <div className='Hero-image'>
        <img src={img} alt='Hero' className='Hero-image-src' />
      </div>
    </div>
  );
}

export default Hero;
