import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './NavBar.css';
import images from '../../constants/images';


const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar' id='main-page'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="Feed Motion Advertising Logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__serif'><Link to="services" onClick={() => setToggleMenu(false)}>Послуги</Link></li>
        <li className='p__serif'><Link to="about-us" onClick={() => setToggleMenu(false)}>Про нас</Link></li>
        <li className='p__serif'><Link to="reviews" onClick={() => setToggleMenu(false)}>Відгуки</Link></li>
        <li className='p__serif'><Link to="contacts" onClick={() => setToggleMenu(false)}>Контакти</Link></li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <svg className="overlay__open" onClick={() => setToggleMenu(true)} width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="14" height="1" fill="#343434"/>
          <rect y="5" width="14" height="1" fill="#343434"/>
          <rect y="10" width="14" height="1" fill="#343434"/>
        </svg>

        {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay'>
              <div className="app__navbar-smallscreen_overlaycontent-850">
                <img className='app-navbar-background' src={images.bench} alt="Work bench"/>
                <ul className='app__navbar-smallscreen-links-850'>
                  <li><Link to="services" onClick={() => setToggleMenu(false)}>Послуги</Link></li>
                  <li><Link to="about-us" onClick={() => setToggleMenu(false)}>Про нас</Link></li>
                  <li><Link to="reviews" onClick={() => setToggleMenu(false)}>Відгуки</Link></li>
                  <li><Link to="contacts" onClick={() => setToggleMenu(false)}>Контакти</Link></li>
                </ul>
              </div>
              <div className="app__navbar-smallscreen_overlaycontent-450">
                <img className='app-navbar-background' src={images.bench} alt="Work bench"/>
                <ul className='app__navbar-smallscreen-links-450'>
                  <li><Link to="servicesphone" onClick={() => setToggleMenu(false)}>Послуги</Link></li>
                  <li><Link to="about-usphone" onClick={() => setToggleMenu(false)}>Про нас</Link></li>
                  <li><Link to="reviewsphone" onClick={() => setToggleMenu(false)}>Відгуки</Link></li>
                  <li><Link to="contactsphone" onClick={() => setToggleMenu(false)}>Контакти</Link></li>
                </ul>
              </div>
            </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar;
