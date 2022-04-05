import React from 'react'

import './Price.css';
import images from '../../constants/images';

const Price = () => {

  return(
    <div className="app__price">
      <div className="app__price-leftline"></div>
      <div className='app__price-information'>
        <p className='ProductSign'>Послуги</p>
        <div className='ProductInformation'>
          <p className='ProductName'>Web-Maxima</p>
          <p className='ProductPrice'>₴ 10,000</p>
          <p className='ProductDescription'>Це той самий випадок, коли довіритися професіоналам та <br /> розслабитися є найкращим з варіантів</p>
          <p className='ProductPropose'>Ми пропонуємо :</p>
          <div className='ProductPropose-list'>
            <div className='ProductListElement'>
              <p className='ListNumber'>1</p>
              <p className='ListDash'>-</p>
              <p className='ListDescription'>Аудит сайту та рекламного кабінету</p>
            </div>
            <div className='ProductListElement'>
              <p className='ListNumber'>2</p>
              <p className='ListDash'>-</p>
              <p className='ListDescription'>Розробка портрету цільової аудиторії, Mind-карта</p>
            </div>
            <div className='ProductListElement'>
              <p className='ListNumber'>3</p>
              <p className='ListDash'>-</p>
              <p className='ListDescription'>SEO оптимізація рейтингу сайту</p>
            </div>
            <div className='ProductListElement'>
              <p className='ListNumber'>4</p>
              <p className='ListDash'>-</p>
              <p className='ListDescription'>Налаштування контекстної реклами</p>
            </div>
            <div className='ProductListElement'>
              <p className='ListNumber'>5</p>
              <p className='ListDash'>-</p>
              <p className='ListDescription'>Налаштування аналітики відстежування</p>
            </div>
            <div className='ProductListElement'>
              <p className='ListNumber'>6</p>
              <p className='ListDash'>-</p>
              <p className='ListDescription'>Щотижневі звіти</p>
            </div>
            <div className='ProductListElement'>
              <p className='ListNumber'>7</p>
              <p className='ListDash'>-</p>
              <p className='ListDescription'>Тісний взаємозв'язок з командою напортязі місяця</p>
            </div>
          </div>
          <a className='DateUs' onclick={ () => {}}>Назначити зустріч</a>
        </div>

      </div>
          <div className='arrowfour'>
            <img src={images.arrowfour} alt="Arrow four" />
          </div>
      <div className='app__price-products'>
          <div className='Web-Maxima'>
            <img src={images.web_maxima} alt="Web-Maxima logo" />
            <p className='ProductListName'>Web-Maxima</p>
            <p className='ProductListPrice'>₴ 10,000</p>
          </div>
          <div className='Web-Optima'>
            <img src={images.web_optima} alt="Web-Optima logo" />
            <p className='ProductListNameDecreased'>Web-Optima</p>
            <p className='ProductListPriceDecreased'>₴ 4,000</p>
          </div>
          <div className='Web-Limitless'>
            <img src={images.web_limitless} alt="Web-Limitless logo" />
            <p className='ProductListNameWhite'>Web-Limitless</p>
            <p className='ProductListPriceWhite'>Від ₴ 10,000</p>
          </div>
      </div>
    </div>
  )
}

export default Price