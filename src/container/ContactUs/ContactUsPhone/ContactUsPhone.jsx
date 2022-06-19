import React from 'react'

import './ContactUsPhone.css';
import images from '../../../constants/images';

const ContactUsPhone = () => {
  return (
    <div className='app__contactusphone'>
      <div className='contactusphone-email'>
        <div className='contactusphone-nameEmail'>E-mail</div>
        <div className='contactusphone-contact'>fma@gmail.com</div>
      </div>

      <div className="contactusphodne-verticalline"></div>

      <div className='contactusphone-phone'>
      <div className='contactusphone-namePhone'>Олександр</div>
      <div className='contactusphone-contact'>+38(095)-620-1283</div>
      </div>
    </div>
  )
}

export default ContactUsPhone