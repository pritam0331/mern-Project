// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignupSignin from './components/Signup/SignupSignin'
import Signin from './components/Signin/Signin'
import Footer from './components/Footer/Footer'
// import TermsandCond from './components/Termsandcondition/Termsandcond'
import PrivacyAndPolicy from './components/PrivacyAndPolicy/PrivacyAndPolicy'

// import Forgot from './components/Form3/Forgot'

import ForgetPassword from './components/Password/ForgetPassword'
import BloodAcceptor from './components/BloodAcceptor/BloodAcceptor'
import PrivatePortal from './components/PrivacyPortal/PrivatePortal'
import Doner from './components/Doner/Doner'
import BloodTest from './components/BloodTest/BloodTest'

import VerifyOtp from './components/VerifyOtp/VerifyOtp'
import ConfirmPassword from './components/ConfirmPassword/ConfirmPassword'

import Termsandcond from './components/Termsandcondition/Termsandcond'


// import Hero from './components/Hero/Hero'
// import TermsAndCond from './components/Termsandcondition/Termsandcond'
// import FAQ from './components/FAQ'
// import Footer from './components/Footer'

function App() {
 return (
  <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route element={<PrivatePortal/>}>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/find-donor" element={<BloodAcceptor/>}></Route>
      <Route path="/terms" element={<Termsandcond/>}></Route>
      <Route path="/privacy" element={<PrivacyAndPolicy/>}></Route>
      <Route path="/donate-blood" element={<Doner/>}></Route>
      <Route path="/blood-test" element={<BloodTest/>}></Route>
      </Route>
      <Route path='/forgetpass' element={<ForgetPassword/>}></Route>
      <Route path='/verifyotp' element={<VerifyOtp/>}></Route>
      <Route path='/confirm' element={<ConfirmPassword/>}></Route>
      <Route path="/signup" element={<SignupSignin/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>

    <Footer/>  
    </>
 )
}

export default App