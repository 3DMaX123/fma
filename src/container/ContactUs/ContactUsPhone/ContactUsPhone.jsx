import React from 'react'

import './ContactUsPhone.css';
import images from '../../../constants/images';

const ContactUsPhone = () => {
  return (
    <div className='app__contactusphone'>
      <img className='arrowphone_contactus' src={images.phonearrowfife} alt="arrow"/>
      <div className='contactusphone_meet-us'>Зв'яжіться з нами</div>
      <div className='contactusphone-label1'>
        <div className='label1-Email'>E-mail</div>
        <div className='label1-Name'>Олександр</div>
      </div>
   
      <div className='contactusphone-label2'>
      <div className='label2-Email'>fma@gmail.com</div>
      <div className='label2-Name'>+38(095)-620-1283</div>
      </div>
    </div>
  )
}

export default ContactUsPhone