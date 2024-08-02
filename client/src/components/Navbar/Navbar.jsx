import React, { Component } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

class Navbar extends Component {

  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    const navigate = useNavigate()
    let handleRemove = ()=>{
    localStorage.clear()
      navigate('/signin')
    }
  return (
    <>
      <nav>
        <a href="/">Rakt<span>Daan</span></a>
        <div>
          <ul id="navbar" className={this.state.clicked ?'#navbar active':'#navbar'}>
          {auth?<><li><a href="/" className='active'>Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><button onClick={handleRemove}>Log Out</button></li></>:
            <> <div className="sign-button"><a href="/signup"><button>Signup/Signin</button></a></div></>}  
           
           
          </ul>
          
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
