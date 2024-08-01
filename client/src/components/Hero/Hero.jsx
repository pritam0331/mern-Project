import React from 'react'
import './Hero.css'
import img from './image3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      offset: 200,
    })
  }, [])
  return (
    <>
        <div className='Hero-section'>
            <div className='Hero-content' data-aos="fade-up-right">
                <h1 className='Hero-title'>Welcome to Rakt <span className='span4'>Daan</span></h1>
                <p className='Hero-text'>These words capture key aspects of blood donation, emphasizing its importance in saving lives, the selfless nature of donors, and the positive impact it has on society.</p>
                    <button className='Hero-button'><a href="/about">Get Started</a></button>
            </div>
            <div className='Hero-image' data-aos="fade-up-right">
                <img src={img} alt='Hero Image'
                className='Hero-image-src'/>
            </div>
        </div>
    </>
  )
}

export default Hero