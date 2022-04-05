import React from 'react'

import { Header, Price, AboutUs, Review, ContactUs, Footer} from './container';
import {NavBar} from './components';
import './App.css';

const App = () => (
    <div>
        <NavBar /> 
        <Header />
        <Price />    
        <AboutUs />    
        <Review />    
        <ContactUs />    
        <Footer />       
    </div>
);

export default App