import React from 'react'
import images from '../../../constants/images';

import './OrderMeeting.css';

function Number(props){
    if(props.isRed){
      return(
        <div className='number numberone' style={{ color: 'var(--color-red)'}}>{props.number}</div>
      )
    }else{
      return(
        <div className='number numberone' style={{ color: 'var(--color-black)'}}>{props.number}</div>
      )
    }
  }
  
  
  function LabelN(props){
    if(!props.isRedN){
      return <div className='order-field-lable'><p className='animSlideDownOne'>Ваше ім'я</p></div>
    }else{
      return <div className='order-field-lable-error'><p className='animSlideUp'>Не соромтесь</p></div>
    }
  }
  function LabelE(props){
    if(props.isValid){
      return <div className='order-field-lable'><p className='animSlideDownTwo'>Щось не так з поштою</p></div>
    }
    else if(!props.isRedE){
      return <div className='order-field-lable'><p className='animSlideDownTwo'>Ваша пошта</p></div>
    }else if(props.isRedE){
      return <div className='order-field-lable-error'><p className='animSlideUp'>Це для зв'язку з вами</p></div>
    }
  }
  function LabelP(props){
    if(!props.isRedP){
      return <div className='order-field-lable'><p className='animSlideDownThree'>Ми вас уважно слухаємо</p></div>
    }else{
      return <div className='order-field-lable-error'><p className='animSlideUp'>Щось ми не розчули</p></div>
    }
  }

class OrderMeeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          orderNameInput: '',
          orderEmailInput: '',
          orderSomethingToKnowInput: '',
          isRedOrderN: false,
          isRedOrderE: false,
          isRedOrderP: false,
          isValidOrderEmail: false
        }
    
    
        this.handleOrderChangesName = this.handleOrderChangesName.bind(this);
        this.handleOrderChangesEmail = this.handleOrderChangesEmail.bind(this);
        this.handleOrderChangesSomethingToKnow = this.handleOrderChangesSomethingToKnow.bind(this);
        this.useClickOnButton = this.useClickOnButton.bind(this);
        this.isRedFalseOrderN = this.isRedFalseOrderN.bind(this);
        this.isRedFalseOrderE = this.isRedFalseOrderE.bind(this);
        this.isRedFalseOrderP = this.isRedFalseOrderP.bind(this);
      }
    
      handleOrderChangesName(e){
        this.setState({orderNameInput: e.target.value});
      }
    
      handleOrderChangesEmail(e){
        this.setState({orderEmailInput: e.target.value});
      }
    
      handleOrderChangesSomethingToKnow(e){
        this.setState({orderSomethingToKnowInput: e.target.value});
      }
    
    
      isRedFalseOrderN(){ this.setState({isRedOrderN: false});}
      isRedFalseOrderE(){ this.setState({isRedOrderE: false}); this.setState({isValidOrderEmail: false})}
      isRedFalseOrderP(){ this.setState({isRedOrderP: false});}
      isValidOrderEmail(){ this.setState({isValidOrderEmail: false});}
    
      
      useClickOnButton(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        if(this.state.orderNameInput !== '' && this.state.orderEmailInput !== '' && this.state.orderSomethingToKnowInput !== '' && regex.test(this.state.orderEmailInput) === true){
          console.log('OKKKKK')
        }
        if(this.state.orderNameInput === ''){
          this.setState({isRedOrderN: true,});
        }
        if(this.state.orderEmailInput === ''){
          this.setState({isRedOrderE: true});
        }else if (regex.test(this.state.orderEmailInput) === false){
          this.setState({isValidOrderEmail: true});
          this.setState({isRedOrderE: true});
        }
        if(this.state.orderSomethingToKnowInput === ''){
          this.setState({isRedOrderP: true});
        }
      }
    
      
      render(){
    
      return (
        <div className='app__price_order-mainSubstrate' onClick={(e) => e.stopPropagation()}>
          <div className='order-mainSubstrate-content'>
              <div className='order-content-form-arrowSeven'>
                <img src={images.arrowseven} alt="Arrow seven" />
              </div>
            <div className='order-content-form'>
              <div className='order-content-form-fields'>
                  <div className='order-form-field'>
                    <Number number='01' isRed={this.state.isRedOrderN}/>
                    <form className='order-form-form'>
                      <input type='text' title="Сюди ім'я" onClick={this.isRedFalseOrderN} value={this.state.orderNameInput} onChange={this.handleOrderChangesName} required></input>
                      <LabelN isRedN={this.state.isRedOrderN} />
                    </form>
                  </div>
                  <div className='order-form-field'>
                    <Number number='02' isRed={this.state.isRedOrderE}/>
                    <form className='order-form-form'>
                      <input type='text' title="Опишіть нам проблему" onClick={this.isRedFalseOrderE} value={this.state.orderPositionInput} onChange={this.handleOrderChangesEmail} required></input>
                      <LabelE isRedE={this.state.isRedOrderE} isValid={this.state.isValidOrderEmail}/>
                    </form>
                  </div>
                  <div className='order-form-fieldL'>
                    <Number number='03' isRed={this.state.isRedOrderP}/>
                    <form className='order-form-form'>
                      <input type='text' title="Опишіть нам проблему" onClick={this.isRedFalseOrderP} value={this.state.orderSomethingToKnowInput} onChange={this.handleOrderChangesSomethingToKnow} required></input>
                      <LabelP isRedP={this.state.isRedOrderP} />
                    </form>
                  </div>
              </div>
              <div className='order-content-buttonandbutton'>
                <button className='order-commitbutton' onClick={this.useClickOnButton}>Віправити</button>
              </div>
            </div>
              <div className='order-content-image'>
                <img src={images.hellcircle} alt='Black tree with white background' />
              </div>
          </div>
        </div>
      )
    }
}

export default OrderMeeting