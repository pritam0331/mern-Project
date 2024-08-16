// components/NotFoundPage.jsx
import React from 'react';
import './NotFoundPage.css';

import image from './notFound2.png'
function NotFoundPage() {
  return (
    <div>
    <img  className='notfound-image' src={image} />
    </div>
  );
}

export default NotFoundPage;
