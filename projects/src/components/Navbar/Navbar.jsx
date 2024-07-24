import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <>
      <nav>
        <a href="/home">Rakt<span>Daan</span></a>
        <div>
          <ul id="navbar" className={this.state.clicked ?'#navbar active':'#navbar'}>
            <li><a href="/home" className='active'>Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/signin">Signin</a></li>
          </ul>
          {/* <button className='signup-button'><a href="/signup">Signup/Signin</a></button> */}
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ?'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </>
  )
}
}

export default Navbar
