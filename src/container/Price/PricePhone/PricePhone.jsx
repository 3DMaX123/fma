import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import './PricePhone.css';
import images from '../../../constants/images';

const PricePhone = () => {
  return (
    <div className='app__pricephone'>
      <div className='pricephone-productsChoosen'>
        <p className='pricephone-priceSign'>Послуги</p>
        <ScrollContainer className='pricephone-productsChoosen-buttons'>
          <button className='productsChoosen-mainButton'>Web-Maxima</button>
          <button className='productChoosen-additionalButton'>Web-Optima</button>
          <button className='productChoosen-additionalButton'>Web-Optima</button>
        </ScrollContainer>
      </div>

      <div className='pricephone-prices'>
      <div className='pricephone-web-Limitless'>
        <img className='phonepriceAdditionalLeft' src={images.web_limitless} alt='Web-Limitless logo'/>
        <p className='pricephone-priceWeb-Limitless'>від ₴8,000</p>
      </div>
      <div className='pricephone-web-Maxima'>
        <img className='phonepriceMain' src={images.web_maxima} alt='Web-Maxima logo'/>
        <p className='pricephone-priceWeb-Maxima'>₴10,000</p>
      </div>
      <div className='pricephone-web-Optima'>
        <img className='phonepriceAdditionalRight' src={images.web_optima} alt='Web-Optima logo'/>
        <p className='pricephone-priceWeb-Optima'>₴4,000</p>
      </div>
      </div>

      <div className='pricephone-informationAboutService'>
        <p className='pricephone-prices-header'>Web-Maxima</p>
        <p className='pricephone-prices-price'>₴ 10,000</p>
        <p className='pricephone-prices-description'>Це той самий випадок, коли довіритися <br />професіоналам та розслабитися є<br />найкращим з варіантів</p>
        <p className='pricephone-prices-propose'>Ми пропонуємо :</p>
        <ul>
          <li><div className='pricephone-prices-square'></div>Аудит сайту та рекламного кабінету</li>
          <li><div className='pricephone-prices-square'></div>Розробка портрету цільової аудиторії, Mind карта</li>
          <li><div className='pricephone-prices-square'></div>SEO оптимізація сайту</li>
          <li><div className='pricephone-prices-square'></div>Налаштування контекстної реклами</li>
          <li><div className='pricephone-prices-square'></div>Налаштування аналітики відстежування</li>
          <li><div className='pricephone-prices-square'></div>Щотижневі звіти протягом місяця</li>
          <li><div className='pricephone-prices-square'></div>Тісний взаємозв’язок з командою напротязі місяця</li>
        </ul>
      </div>



        <img className="PricePalm" src={images.cutpalm} alt="Palm" /> 
        <img className="PricePalm1" src={images.cutpalm} alt="Palm" />
        <img className='arrow_price' src={images.phonearrowthree} alt="arrow"/>
    </div>
  )
}

export default PricePhone