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
import TermsandCond from './components/Termsandcondition/Termsandcond'
import Privandpol from './components/Privacyandpolicies/Privandpol'
// import TermsandCond from './components/Termsandcondition/Termsandcond'
import Term from './assets/TermsAndCon/Term'
import PrivacyAndPolicy from './components/PrivacyAndPolicy/PrivacyAndPolicy'

// import Forgot from './components/Form3/Forgot'

import ForgetPassword from './components/Password/ForgetPassword'
import BloodAcceptor from './components/BloodAcceptor/BloodAcceptor'
import PrivatePortal from './components/PrivacyPortal/PrivatePortal'
import Doner from './components/Doner/Doner'

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
      <Route path="/terms" element={<Term/>}></Route>
      <Route path="/privacy" element={<PrivacyAndPolicy/>}></Route>
      <Route path="/donate-blood" element={<Doner/>}></Route>
      </Route>
      <Route path='/forgetpass' element={<ForgetPassword/>}></Route>
      <Route path="/signup" element={<SignupSignin/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>

    <TermsandCond/>
    <Privandpol/>
    <Footer/>

    <Footer/>   
    {/* <Forgot/> */}
    </>
 )
}

export default App