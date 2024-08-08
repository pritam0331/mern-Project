import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='775394978886-hn9a2m2fruvmtv0ebtn77b2mseaerbp5.apps.googleusercontent.com'>
    <React.StrictMode>
       <App/>
  </React.StrictMode>
  </GoogleOAuthProvider>
)
