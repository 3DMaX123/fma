import React, { useState, useEffect, Suspense  } from 'react'

import { Header, Price, AboutUs, Review, ContactUs } from './container';
import {NavBar, Footer} from './components';
import { HeaderPhone, PricePhone, AboutUsPhone, ReviewPhone, ContactUsPhone, FooterPhone } from './container/Phones'; 
import './App.css';

class Change extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            innerWidth: window.innerWidth
        }
    }

    handleResize = () => {
        this.setState({innerWidth: window.innerWidth});
    }

    componentDidMount(){
        window.addEventListener("resize", this.handleResize)
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.handleResize)
    }



    render(){
        const innerWidth = this.state.innerWidth

        if(innerWidth > 480){
            return(
                <>
                    <Suspense fallback={<div>Завантаження...</div>}>
                        <NavBar /> 
                        <Header />
                        <Price />
                        <AboutUs />    
                        <Review />    
                        <ContactUs />     
                        <Footer />  
                    </Suspense>
                </>
            )
        }else{
            return(
                <>
                    <Suspense fallback={<div>Завантаження...</div>}>
                        <NavBar /> 
                        <HeaderPhone />
                        <PricePhone />
                        <AboutUsPhone />
                        <ReviewPhone />
                        <ContactUsPhone />
                        <FooterPhone />
                    </Suspense>
                </>
            )
        }
    }
}

const App = () => (
    <div>
        <Change />
    </div>
);

export default App