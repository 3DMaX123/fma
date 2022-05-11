import React from 'react'

import images from '../../../constants/images';
import './HeaderPhone.css';

const HeaderPhone = () => {
  return (
    <div className='app__headerphone'>
        <div className='headerphone_service_text'>
        Послуги Просування <strong>Сайтів в Google</strong>        
        </div>
        <img className='arrow_header' src={images.phonearrowone} alt="arrow"/>
        <img className="Header-palm" src={images.cutpalm} alt="Palm" /> 
        <img className="Header-palm2" src={images.cutpalm} alt="Palm2" /> 
        <img className="Header-palm3" src={images.cutpalm} alt="Palm3" /> 
        <img className="Header-palm4" src={images.cutpalm} alt="Palm4" /> 
        <div className='headerphone_utp'>
          Утп
          <ul>
            <li>Поступове зниження Ціни За Клік</li>
            <li>Підготуємо сайт до <strong>реклами</strong></li>
            <li>Мінімальний рекламний 
              <p> бюджет<strong> ₴ 3000/міс </strong> </p></li>
          </ul>
        </div>
        <div className='headerphone_fma'>
            FMA
        </div>
        <div className='headerphone_fma_whiteBorder1'></div>
        <div className='headerphone_fma_whiteBorder2'></div>
        <img className='arrow_header2' src={images.phonearrowtwo} alt="arrow2"/>
    </div>
  )
}

export default HeaderPhone