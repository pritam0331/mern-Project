import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()
  const auth = localStorage.getItem('user')
  
  const handleClick = () => {
    setClicked(!clicked)
  }
  
  const handleRemove = () => {
    localStorage.clear()
    navigate('/')
  }

  // Close menu when a link is clicked
  const closeMenu = () => {
    setClicked(false)
  }

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setClicked(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <nav className={clicked ? 'navbar active' : 'navbar'}>
      <a href="/" onClick={closeMenu} className='logo'>Rakt<span>Daan</span></a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="/about" onClick={closeMenu}>About</a></li>
        {auth ? (
          <>
            <li><a href="/contact" onClick={closeMenu}>Contact</a></li>
            <li><button onClick={() => { handleRemove(); closeMenu(); }}>Log Out</button></li>
          </>
        ) : (
          <li className="sign-button">
            <a href="/signup" onClick={closeMenu}><button>Signup/Signin</button></a>
          </li>
        )}  
      </ul>
    </nav>
  )
}

export default Navbar