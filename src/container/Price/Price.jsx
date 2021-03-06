import React, { useState } from 'react'

import './Price.css';
import images from '../../constants/images';
import PricePhone from '../Phones/PricePhone/PricePhone';
import OrderMeeting from './OrderMeeting/OrderMeeting';


function WebMaxima(){

  return(
    <div className='Text-Web-Maxima'>
      <div className='animationDiv NameDiv-max'><p className='ProductName'>Web-Maxima</p></div>
      <div className='animationDiv PriceDiv-max'><p className='ProductPrice'>₴ 10,000</p></div>
      <div className='animationDiv DescriptionDiv'><p className='ProductDescription'>Це той самий випадок, коли довіритися професіоналам та </p></div>
      <div className='animationDiv DescriptionBRDiv-max'><p className='ProductDescriptionBR'> розслабитися є найкращим з варіантів !</p></div>
      <div className='animationDiv ProposeDiv'><p className='ProductPropose'>Ми пропонуємо :</p></div>
      <div className='ProductPropose-list'>
        <div className='ProductListElement ListZero animationDiv'>
          <p className='ListNumber'>1</p>
          <p className='ListDash'>-</p>
          <p className='ListDescription'>Аудит сайту та рекламного кабінету</p>
        </div>
        <div className='ProductListElement ListOne animationDiv'>
          <p className='ListNumber'>2</p>
          <p className='ListDash'>-</p>
          <p className='ListDescription'>Розробка портрету цільової аудиторії, Mind-карта</p>
        </div>
        <div className='ProductListElement ListTwo animationDiv'>
          <p className='ListNumber'>3</p>
          <p className='ListDash'>-</p>
          <p className='ListDescription'>SEO оптимізація сайту</p>
        </div>
        <div className='ProductListElement ListThree animationDiv'>
          <p className='ListNumber'>4</p>
          <p className='ListDash'>-</p>
          <p className='ListDescription'>Налаштування контекстної реклами</p>
        </div>
        <div className='ProductListElement ListFour animationDiv'>
          <p className='ListNumber'>5</p>
          <p className='ListDash'>-</p>
          <p className='ListDescription'>Налаштування аналітики відстежування</p>
        </div>
        <div className='ProductListElement ListFife animationDiv'>
          <p className='ListNumber'>6</p>
          <p className='ListDash'>-</p>
          <p className='ListDescription'>Детальний аудит кожний тиждень протягом місяця</p>
        </div>
        <div className='ProductListElement ListSix animationDiv'>
          <p className='ListNumber'>7</p>
          <p className='ListDash'>-</p>
          <p className='ListDescription'>Тісний взаємозв'язок з командою напортязі місяця</p>
        </div>
      </div>
    </div>
  )
}

function WebOptima(){

  return(
    <div className='Text-Web-Optima'>
    <div className='animationDiv NameDiv'><p className='ProductName'>Web-Optima</p></div>
    <div className='animationDiv PriceDiv'><p className='ProductPrice'>₴ 4,000</p></div>
    <div className='animationDiv DescriptionDiv'><p className='ProductDescription'>Створено спеціально для вас. Це ж у вас є сумніви щодо вже</p></div>
    <div className='animationDiv DescriptionBRDiv'><p className='ProductDescriptionBR'> наявної рекламної кампанії ?</p></div>
    <div className='animationDiv ProposeDiv'><p className='ProductPropose'>Ми пропонуємо :</p></div>
    <div className='ProductPropose-list'>
      <div className='ProductListElement ListZero animationDiv'>
        <p className='ListNumber'>1</p>
        <p className='ListDash'>-</p>
        <p className='ListDescription'>Аудит сайту та рекламного кабінету</p>
      </div>
      <div className='ProductListElement ListOne animationDiv'>
        <p className='ListNumber'>2</p>
        <p className='ListDash'>-</p>
        <p className='ListDescription anim'>Фахові рекомендації</p>
      </div>
      <div className='ProductListElement ListTwo animationDiv'>
        <p className='ListNumber'>3</p>
        <p className='ListDash'>-</p>
        <p className='ListDescription'>Ручна чистка трафіку</p>
      </div>
      <div className='ProductListElement ListThree animationDiv'>
        <p className='ListNumber'>4</p>
        <p className='ListDash'>-</p>
        <p className='ListDescription'>Конткретні рекомендації SEO оптимізації сайту</p>
      </div>
      <div className='ProductListElement ListFour animationDiv'>
        <p className='ListNumber'>5</p>
        <p className='ListDash'>-</p>
        <p className='ListDescription'>Плавне зниження Ціни За Клік</p>
      </div>
      <div className='ProductListElement ListFife animationDiv'>
        <p className='ListNumber'>6</p>
        <p className='ListDash'>-</p>
        <p className='ListDescription'>Детальний аудит кожні два тижні протягом місяця</p>
      </div>
      <div className='ProductListElement ListSix animationDiv'>
        <p className='ListNumber'>7</p>
        <p className='ListDash'>-</p>
        <p className='ListDescription'>Налаштування аналітики</p>
      </div>
    </div>
  </div>
  )
}



class Price extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      whichOne: 'web-maxima',
      isOpenOrderMeeting: false
    }

    this.handleChangeWhichOne = this.handleChangeWhichOne.bind(this);
  }

  handleChangeWhichOne(){
    if(this.state.whichOne === 'web-maxima'){
      this.setState({whichOne: 'web-optima'})
    }else{
      this.setState({whichOne: 'web-maxima'})
    }
  }

  render(){
    return(
      <>
      <div className="app__price" id='services'>
        <div className="app__price-leftline"></div>
        <div className='app__price-information'>
          <p className='ProductSign'>Послуги</p>
          <div className='ProductInformation'>
            {this.state.whichOne === 'web-maxima' &&
              <WebMaxima />
            }
            {this.state.whichOne === 'web-optima' &&
              <WebOptima />
            }
            <button onClick={() => this.setState({isOpenOrderMeeting: true})} className='DateUs'>Назначити зустріч</button>
          </div>

        </div>
            <div className='arrowfour'>
              <img src={images.arrowfour} alt="Arrow four" />
            </div>
        <div className='app__price-products'>
            {this.state.whichOne === 'web-maxima' && 
              <>
                <div className='Web-Maxima priceMain ' >
                  <img src={images.web_maxima} alt="Web-Maxima logo" />
                  <p className='ProductListName'>Web-Maxima</p>
                  <p className='ProductListPrice'>₴ 10,000</p>
                </div>
                <div className='Web-Optima priceAdditional ' onClick={this.handleChangeWhichOne}>
                  <img src={images.web_optima} alt="Web-Optima logo" />
                  <p className='ProductListNameDecreased'>Web-Optima</p>
                  <p className='ProductListPriceDecreased'>₴ 4,000</p>
                </div>
              </>
            }
            {this.state.whichOne === 'web-optima' &&
                <>
                  <div className='Web-Optima priceMain'>
                    <img src={images.web_optima} alt="Web-Optima logo" />
                    <p className='ProductListName'>Web-Optima</p>
                    <p className='ProductListPrice  '>₴ 4,000</p>
                  </div>
                  <div className='Web-Maxima priceAdditional' onClick={this.handleChangeWhichOne}>
                    <img src={images.web_maxima} alt="Web-Maxima logo" />
                    <p className='ProductListNameDecreased'>Web-Maxima</p>
                    <p className='ProductListPriceDecreased'>₴ 10,000</p>
                  </div>
                </>
            }
            <div className='Web-Limitless'>
              <img src={images.web_limitless} alt="Web-Limitless logo" />
              <p className='ProductListNameWhite'>Web-Limitless</p>
              <p className='ProductListPriceWhite'>Від ₴ 10,000</p>
            </div>
        </div>
        {this.state.isOpenOrderMeeting &&
        <div className='app__review_typereview-blurSubstrate' onClick={() => this.setState({isOpenOrderMeeting: false})}>
          <OrderMeeting />
        </div>
        }
      </div>
    </>
    )
  }
}

export default Price