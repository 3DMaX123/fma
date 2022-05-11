import React from 'react'

import './FooterPhone.css';

const FooterPhone = () => {
  return (
    <div className='app__footerphone'>
        <div className='footerphone-content-ads'>Feed motion ADS</div>
        <div className='footerphone-content-one'>Одна з багатьох компаній концерну Feed Motion. Яка займається просуванням сайтів рекламним та органічним шляхом, їх підготовки та супроводження рекламних кампаній.</div>
        <div className='footerphone-phone-label'>
          <div className='footerphone-phone-label-email'>E-mail</div>
          <div className='footerphone-phone-label-phone'>Телефон</div>

        </div>
        <div className='footerphone-phone-label2'>
          <div className='footerphone-phone-email'>fma@gmail.com</div>
          <div className='footerphone-phone-phone'>+38(095)-620-1283</div>
        </div>
        <div className='footerphone-content-about'>
          <ul className='footerphone-content-side-p'>Мапа сайту
          <li>Головна сторінка</li>
          <li>Послуги</li>
          <li>Про нас</li>
          <li>Відгуки</li>
          <li>Контакти</li>
          </ul>
        </div>
        <div className='footerphone-content-support'>
          <ul className='footerphone-content-side-p'>Підтримка
            <li>Написати відгук</li>
            <li>Зателефонувати</li>
            <li>Повідомити про проблему</li>
            <li>Є пропозиція</li>
          </ul>
        </div>
        <div className='footerphone-content-social'>
          <ul className='footerphone-content-side-p'> Соціальні мережі
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className='footerphone-content-product'>
          <ul className='footerphone-content-side-p'> Продукти
            <li> Web - Maxima</li>
            <li>Web - Optimal</li>
            <li>Web - Limitless</li>
          </ul>
        </div>
    </div>
  )
}

export default FooterPhone