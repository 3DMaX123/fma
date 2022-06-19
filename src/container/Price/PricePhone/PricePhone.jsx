import React from 'react'

import './PricePhone.css';
import images from '../../../constants/images';

const PricePhone = () => {
  return (
    <div className='app__pricephone'>
      <div className='pricephone-productsChoosen'>
        <p className='pricephone-priceSign'>Послуги</p>
        <div className='pricephone-productsChoosen-buttons'>
          <button className='productsChoosen-mainButton'>Web-Maxima</button>
          <button className='productChoosen-additionalButton'>Web-Optima</button>
          <button className='productChoosen-additionalButton'>Web-Optima</button>
        </div>
      </div>













      <div className='pricephone-palms'>
        <img className="PricePalm" src={images.cutpalm} alt="Palm" /> 
        <img className="PricePalm1" src={images.cutpalm} alt="Palm" />
        <img className='arrow_price' src={images.phonearrowthree} alt="arrow"/>
      </div>
    </div>
  )
}

export default PricePhone