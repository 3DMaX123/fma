import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import './PricePhone.css';
import images from '../../../constants/images';

function PhoneWebMaxima(){

  return(
      <div className='pricephone-informationAboutService'>
        <div className='animationDiv NameDiv'><p className='pricephone-prices-header'>Web-Maxima</p></div>
        <div className='animationDiv PriceDiv'><p className='pricephone-prices-price'>₴ 10,000</p></div>
        <div className='animationDiv DescriptionDiv'><p className='pricephone-prices-description'>Це той самий випадок, коли довіритися</p></div>
        <div className='animationDiv DescriptionBRDiv'><p className='pricephone-prices-description'>професіоналам та розслабитися є </p></div>
        <div className='animationDiv DescriptionBRDiv pricePhoneLastDiv'><p className='pricephone-prices-description'>найкращим з варіантів</p></div>
        <div className='animationDiv ProposeDiv'><p className='pricephone-prices-propose'>Ми пропонуємо :</p></div>
        <div className='pricephone-prices-list'>
          <div className='ListZero animationDiv'><span className='pricephone-prices-square'></span><p>Аудит сайту та рекламного кабінету</p></div>
          <div className='ListOne animationDiv'><span className='pricephone-prices-square'></span><p>Розробка портрету цільової аудиторії, Mind карта</p></div>
          <div className='ListTwo animationDiv'><span className='pricephone-prices-square'></span><p>SEO оптимізація сайту</p></div>
          <div className='ListThree animationDiv'><span className='pricephone-prices-square'></span><p>Налаштування контекстної реклами</p></div>
          <div className='ListFour animationDiv'><span className='pricephone-prices-square'></span><p>Налаштування аналітики відстежування</p></div>
          <div className='ListFife animationDiv'><span className='pricephone-prices-square'></span><p>Щотижневі звіти протягом місяця</p></div>
          <div className='ListSix animationDiv'><span className='pricephone-prices-square'></span><p>Тісний взаємозв’язок з командою напротязі місяця</p></div>
        </div>
      </div>
  )
}

function PhoneWebOptima(){

  return(
    <div className='pricephone-informationAboutService'>
    <div className='animationDiv NameDiv'><p className='pricephone-prices-header'>Web-Optima</p></div>
    <div className='animationDiv PriceDiv'><p className='pricephone-prices-price'>₴ 4,000</p></div>
    <div className='animationDiv DescriptionDiv'><p className='pricephone-prices-description'>Створено спеціально для вас. Це ж у вас є сумніви</p></div>
    <div className='animationDiv DescriptionBRDiv pricePhoneLastDiv'><p className='pricephone-prices-description'>щодо вже наявної рекламної кампанії</p></div>
    <div className='animationDiv ProposeDiv'><p className='pricephone-prices-propose'>Ми пропонуємо :</p></div>
    <div className='pricephone-prices-list'>
      <div className='ListZero animationDiv'><span className='pricephone-prices-square'></span><p>Аудит сайту та рекламного кабінету</p></div>
      <div className='ListOne animationDiv'><span className='pricephone-prices-square'></span><p>Розробка портрету цільової аудиторії, Mind карта</p></div>
      <div className='ListTwo animationDiv'><span className='pricephone-prices-square'></span><p>SEO оптимізація сайту</p></div>
      <div className='ListThree animationDiv'><span className='pricephone-prices-square'></span><p>Налаштування контекстної реклами</p></div>
      <div className='ListFour animationDiv'><span className='pricephone-prices-square'></span><p>Налаштування аналітики відстежування</p></div>
      <div className='ListFife animationDiv'><span className='pricephone-prices-square'></span><p>Щотижневі звіти протягом місяця</p></div>
      <div className='ListSix animationDiv'><span className='pricephone-prices-square'></span><p>Тісний взаємозв’язок з командою напротязі місяця</p></div>
    </div>
  </div>
  )
}

const PricePhone = () => {

  const [ phoneWhichOne, setPhoneWhichOne ] = useState('web-maxima');

  return (
    <div className='app__pricephone' id='servicesphone'>
      <div className='pricephone-productsChoosen'>
        <p className='pricephone-priceSign'>Послуги</p>
        {phoneWhichOne === 'web-maxima' &&
          <ScrollContainer className='pricephone-productsChoosen-buttons'>
            <button className='productChoosen-mainButton phonePriceMain'>Web-Maxima</button>
            <button className='productChoosen-additionalButton phonePriceAdditional' onClick={() => setPhoneWhichOne('web-optima')}>Web-Optima</button>
            <button className='productChoosen-additionalButton phonePriceAdditional'>Web-Limitless</button>
          </ScrollContainer>
        }
        {phoneWhichOne === 'web-optima' &&
          <ScrollContainer className='pricephone-productsChoosen-buttons '>
            <button className='productChoosen-mainButton phonePriceMain'>Web-Optima</button>
            <button className='productChoosen-additionalButton phonePriceAdditional' onClick={() => setPhoneWhichOne('web-maxima')}>Web-Maxima</button>
            <button className='productChoosen-additionalButton phonePriceAdditional'>Web-Limitless</button>
          </ScrollContainer>
        }
      </div>
      {phoneWhichOne === 'web-maxima' &&
        <div className='pricephone-prices'>
        <div className='pricephone-Left phonePriceAdditional'>
          <img className='phonepriceAdditionalLeft' src={images.web_limitless} alt='Web-Limitless logo'/>
        </div>
        <div className='pricephone-Main phonePriceMain'>
          <img className='phonepriceMain' src={images.web_maxima} alt='Web-Maxima logo'/>
          <p className='pricephone-priceWeb-MaximaSign'>Web-Maxima</p>
          <p className='pricephone-priceWeb-MaximaPrice'>₴ 10,000</p>
        </div>
        <div className='pricephone-Right phonePriceAdditional'>
          <img className='phonepriceAdditionalRight' src={images.web_optima} alt='Web-Optima logo'/>
          <p className='pricephone-priceWeb-OptimaSign'>Web-Optima</p>
          <p className='pricephone-priceWeb-OptimaPrice'>₴ 4,000</p>
        </div>
      </div>
      }
      {phoneWhichOne === 'web-optima' &&
        <div className='pricephone-prices'>
        <div className='pricephone-Left phonePriceAdditional'>
          <img className='phonepriceAdditionalLeft' src={images.web_limitless} alt='Web-Limitless logo'/>
        </div>
        <div className='pricephone-Main phonePriceMain'>
          <img className='phonepriceMain' src={images.web_optima} alt='Web-Optima logo'/>
          <p className='pricephone-priceWeb-OptimaSign'>Web-Optima</p>
          <p className='pricephone-priceWeb-OptimaPrice'>₴ 4,000</p>
        </div>
        <div className='pricephone-Right phonePriceAdditional'>
          <img className='phonepriceAdditionalRight' src={images.web_maxima} alt='Web-Maxima logo'/>
          <p className='pricephone-priceWeb-MaximaSign'>Web-Maxima</p>
          <p className='pricephone-priceWeb-MaximaPrice'>₴ 10,000</p>
        </div>
      </div>
      }
      
      {phoneWhichOne === 'web-maxima' &&
        <PhoneWebMaxima />
      }
      {phoneWhichOne === 'web-optima' &&
        <PhoneWebOptima />
      }
      <button className='pricephone-ordermeeting'>Написати відгук</button>
      <img className="PricePalm" src={images.cutpalm} alt="Palm" /> 
      <img className="PricePalm1" src={images.cutpalm} alt="Palm" />
      <img className='arrow_price' src={images.phonearrowthree} alt="arrow"/>
    </div>
  )
}

export default PricePhone