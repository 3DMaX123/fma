import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className='app_footer_mainSubstrate'>    
      <div className='selection-column'>
      <div className='mainSusbstrate-content-ads'>
        <p>Feed motion ADS</p>
      </div>
      <div className='mainSusbstrate-content-one'>
      <p>Одна з багатьох компаній концерну Feed Motion. Яка займається просуванням сайтів рекламним та органічним шляхом, їх підготовки та супроводження рекламних кампаній.
      </p>
      </div>     
      <div className='phone-label-phone'>
        <table>
        <tr className='tr-try'>
          <td className='mainSusbstrate-content-phone-label'><p>Телефон</p></td>
          <td className='mainSusbstrate-content-phone'><p>+38(095)-620-1283</p></td>
        </tr>
        <tr className='tr-try'>
        <td className='mainSusbstrate-content-mail-label'><p>E-mail</p></td>
          <td className='mainSusbstrate-content-mail'><p>fma@gmail.com</p></td>
        </tr>
        </table>
        </div>      
      </div>
      <div className='mainSusbstrate-content-about'>
        <ul>
          <p className='mainSubstrate-content-side-p'>Мапа сайту</p>
          <li>Головна сторінка</li>
          <li>Послуги</li>
          <li>Про нас</li>
          <li>Відгуки</li>
          <li>Контакти</li>
        </ul>
      </div>
      <div className='mainSusbstrate-content-support'>
      <ul>
          <p className='mainSubstrate-content-side-p'>Підтримка</p>
          <li>Написати відгук</li>
          <li>Зателефонувати</li>
          <li>Повідомити про проблему</li>
          <li>Є пропозиція</li>
        </ul>
      </div>
      <div className='mainSusbstrate-content-social'>
      <ul>
          <p className='mainSubstrate-content-side-p'>Соціальні мережі</p>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className='mainSusbstrate-content-product'>
      <ul>
          <p className='mainSubstrate-content-side-p'>Продукти</p>
          <li>Web - Maxima</li>
          <li>Web - Optimal</li>
          <li>Web - Limitless</li>
        </ul>
      </div>
  </div>
);

export default Footer;
