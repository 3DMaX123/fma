import React from 'react'

import './FooterPhone.css';

const FooterPhone = () => {
  return (
    <div className='app__footerphone'>
        <div className='footerphone-description'>
          <p className='footerphone-name'>Feed motion ADS</p>
          <p className='footerphone-description'>Одна з багатьох компаній концерну Feed Motion. Яка займається просуванням сайтів рекламним та органічним шляхом, їх підготовки та супроводження рекламних кампаній.</p>
        </div>
        <div className='footerphone-EmailAndPhone'>
          <div className='footerphone-email'>
            <div className='footerphone-emailSign'>E-mail</div>
            <div className='footerphone-email'>fma@gmail.com</div>
          </div>
          <div className='footerphone-phone'>
            <div className='footerphone-phoneSign'>Телефон</div>
            <div className='footerphone-phone'>+38(095)-620-1283</div>
          </div>
        </div>
        <div className='footerphone-content-map footerphone-content-lists'>
          <p className='footerphone-content-MainSign'>Мапа сайту</p>
          <ul>
            <li>Головна сторінка</li>
            <li>Послуги</li>
            <li>Про нас</li>
            <li>Відгуки</li>
            <li>Контакти</li>
          </ul>
        </div>
        <div className='footerphone-content-support footerphone-content-lists'>
          <p className='footerphone-content-MainSign'>Підтримка</p>
          <ul>
            <li>Написати відгук</li>
            <li>Зателефонувати</li>
            <li>Повідомити про проблему</li>
            <li>Є пропозиція</li>
          </ul>
        </div>
        <div className='footerphone-content-social footerphone-content-lists'>
          <p className='footerphone-content-MainSign'>Соціальні мережі</p>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className='footerphone-content-product footerphone-content-lists'>
          <p className='footerphone-content-MainSign'>Продукти</p>
          <ul>
            <li>Web - Maxima</li>
            <li>Web - Optimal</li>
            <li>Web - Limitless</li>
          </ul>
        </div>
    </div>
  )
}

export default FooterPhone