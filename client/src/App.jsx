// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignupSignin from './components/Signup/SignupSignin'
import Signin from './components/Signin/Signin'
import Footer from './components/Footer/Footer'
// import TermsandCond from './components/Termsandcondition/Termsandcond'
import Term from './assets/TermsAndCon/Term'
import PrivacyAndPolicy from './components/PrivacyAndPolicy/PrivacyAndPolicy'
import ForgetPassword from './components/Password/ForgetPassword'
<<<<<<< HEAD
import VarifyOtp from './components/Password/VarifyOtp'
import NewPassword from './components/Password/NewPassword'
=======
import BloodAccepter from './components/BloodAccepter/BloodAccepter'
>>>>>>> 4f31edf1de3bac4ecda4c4298af911682d421108
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
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signup" element={<SignupSignin/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/terms" element={<Term/>}></Route>
      <Route path="/privacy" element={<PrivacyAndPolicy/>}></Route>
<<<<<<< HEAD
      <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
      <Route path="/varifyotp" element={<VarifyOtp/>}></Route>
      <Route path="/newpass" element={<NewPassword/>}></Route>
=======
      <Route path='/forgetpass' element={<ForgetPassword/>}></Route>
>>>>>>> 4f31edf1de3bac4ecda4c4298af911682d421108
    </Routes>
    </BrowserRouter>
    {/* <BloodAccepter/> */}
    <Footer/>
    </>
 )
}

export default App