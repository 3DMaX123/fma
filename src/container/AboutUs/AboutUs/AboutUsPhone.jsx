import React from 'react'

import './AboutUsPhone.css';
import images from '../../../constants/images';

const AboutUsPhone = () => {
  return (
    <div className='app__aboutusphone'>
        <div className='aboutus-title'>Feed Motion ADS</div>
        <div className='aboutus-description'>Ми команда, що розуміє проблеми бізнесу та їх виклики сьгодення. Тому і глобальною ціллю нашої компанії стали: просування сайтів рекламним та органічним шляхом, організація роботи рекламних кампаній, їх супровід з підготовкою сайту до викликів. </div>
        <img className="aboutus-palm" src={images.cutpalm} alt="Palm" /> 
        <img className="aboutus-palm2" src={images.cutpalm} alt="Palm" /> 
        <div className='aboutusphone_fma'>
            FMA
        </div>
        <div className='aboutusphone_fma_whiteBorder2'></div> 
        <img className='phonearrow_aboutus' src={images.phonearrowfour} alt="arrow"/>
    </div>
  )
}

export default AboutUsPhone