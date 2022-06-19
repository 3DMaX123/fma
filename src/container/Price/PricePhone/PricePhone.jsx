import React from 'react'

import './PricePhone.css';
import images from '../../../constants/images';


function WebMaximaPhone(){
  return(
    <div className='Text-Web-Maxima-Phone'>
      <div className='Web-Maxima-Name'>Web-Maxima</div>
      <div className='Web-Maxima-Price'> ₴ 10,000 </div>
      <div className='Web-Maxima-Description'>Це той самий випадок, коли довіритися професіоналам та розслабитися є найкращим з варіантів !</div>
      <div className='Web-Maxima-propose'>Ми пропонуємо :</div>
      <div className='Web-Maxima-list'>
      <ul>
        <li>Аудит сайту та рекламного кабінету </li>
        <li>Розробка портрету цільової аудиторії, Mind карта</li>
        <li>SEO оптимізація сайту</li>
        <li>Налаштування контекстної реклами</li>
        <li>Налаштування аналітики відстежування</li>
        <li>Щотижневі звіти протягом місяця</li>
        <li>Тісний взаємозв’язок з командою напротязі місяця</li>
      </ul>
      </div>
    </div>
  );
}

function WebOptimaPhone(){
  return(
    <div className='Text-Web-Optima-Phone'>
    <div className='Web-Optima-Name'> Web-Optima</div>
    <div className='Web-Optima-Price'>₴ 4,000</div>
    <div className='Web-Optima-Description'>Створено спеціально для вас. Це ж у вас є сумніви щодо вженаявної рекламної кампанії ?</div>
    <div className='Web-Optima-propose'>Ми пропонуємо :</div>
    <div className='Web-Optima-list'>
      <ul>
        <li>Аудит сайту та рекламного кабінету</li>
        <li>Фахові рекомендації</li>
        <li>Ручна чистка трафіку</li>
        <li>Конткретні рекомендації SEO оптимізації сайту</li>
        <li>Плавне зниження Ціни За Клік</li>
        <li>Детальний аудит кожні два тижні протягом місяця</li>
        <li>Налаштування аналітики</li>
      </ul>
    </div>
    </div>
  );
}

const PricePhone = () => {
  return (
    <div className='app__pricephone'>
      <div className='offer'>
      <div className='offer-label'>Послуги</div>
      <div className='offer-Web-Maxima'><p>Web-Maxima</p></div>
      <div className='offer-Web-Optima'><p>Web-Optima</p></div>
      </div>
      <WebMaximaPhone />
      <div className='Button-Meeting'><p>Назначити зустріч</p></div>
      <img className="PricePalm" src={images.cutpalm} alt="Palm" /> 
      <img className="PricePalm1" src={images.cutpalm} alt="Palm" />
        <img className='arrow_price' src={images.phonearrowthree} alt="arrow"/>
    </div>
  )
}

export default PricePhone