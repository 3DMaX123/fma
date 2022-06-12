import React from 'react'
import images from '../../../constants/images';

import './TypePropose.css';



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
    return <div className='propose-field-lable'><p className='animSlideDownOne'>Ваше ім'я</p></div>
  }else{
    return <div className='propose-field-lable-error'><p className='animSlideUp'>Не соромтесь</p></div>
  }
}
function LabelE(props){
  if(props.isValid){
    return <div className='propose-field-lable'><p className='animSlideDownTwo'>Щось не так з поштою</p></div>
  }
  else if(!props.isRedE){
    return <div className='propose-field-lable'><p className='animSlideDownTwo'>Ваша пошта</p></div>
  }else if(props.isRedE){
    return <div className='propose-field-lable-error'><p className='animSlideUp'>Це для зв'язку з вами</p></div>
  }
}
function LabelP(props){
  if(!props.isRedP){
    return <div className='propose-field-lable'><p className='animSlideDownThree'>Ми вас уважно слухаємо</p></div>
  }else{
    return <div className='propose-field-lable-error'><p className='animSlideUp'>Щось ми не розчули</p></div>
  }
}


class TypePropose extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          proposeNameInput: '',
          proposeEmailInput: '',
          proposeProblemInput: '',
          isRedProposeN: false,
          isRedProposeE: false,
          isRedProposeP: false,
          isValidProposeEmail: false
        }
    
    
        this.handleProposeChangesName = this.handleProposeChangesName.bind(this);
        this.handleProposeChangesEmail = this.handleProposeChangesEmail.bind(this);
        this.handleProposeChangesProblem = this.handleProposeChangesProblem.bind(this);
        this.useClickOnButton = this.useClickOnButton.bind(this);
        this.isRedFalseProposeN = this.isRedFalseProposeN.bind(this);
        this.isRedFalseProposeE = this.isRedFalseProposeE.bind(this);
        this.isRedFalseProposeP = this.isRedFalseProposeP.bind(this);
      }
    
      handleProposeChangesName(e){
        this.setState({proposeNameInput: e.target.value});
      }
    
      handleProposeChangesEmail(e){
        this.setState({proposeEmailInput: e.target.value});
      }
    
      handleProposeChangesProblem(e){
        this.setState({proposeProblemInput: e.target.value});
      }
    
    
      isRedFalseProposeN(){ this.setState({isRedProposeN: false});}
      isRedFalseProposeE(){ this.setState({isRedProposeE: false}); this.setState({isValidProposeEmail: false})}
      isRedFalseProposeP(){ this.setState({isRedProposeP: false});}
      isValidProposeEmail(){ this.setState({isValidProposeEmail: false});}
    
      
      useClickOnButton(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        if(this.state.proposeNameInput !== '' && this.state.proposeEmailInput !== '' && this.state.proposeProblemInput !== '' && regex.test(this.state.proposeEmailInput) === true){
          console.log('OKKKKK')
        }
        if(this.state.proposeNameInput === ''){
          this.setState({isRedProposeN: true,});
        }
        if(this.state.proposeEmailInput === ''){
          this.setState({isRedProposeE: true});
        }else if (regex.test(this.state.proposeEmailInput) === false){
          this.setState({isValidProposeEmail: true});
          this.setState({isRedProposeE: true});
        }
        if(this.state.proposeProblemInput === ''){
          this.setState({isRedProposeP: true});
        }
      }
    
      
      render(){
    
      return (
        <div className='app__footer_problem-mainSubstrate' onClick={(e) => e.stopPropagation()}>
          <div className='propose-mainSubstrate-content'>
              <div className='propose-content-form-arrowSeven'>
                <img src={images.arrowten} alt="Arrow seven" />
              </div>
            <div className='propose-content-form'>
              <div className='propose-content-form-fields'>
                  <div className='propose-form-field'>
                    <Number number='01' isRed={this.state.isRedProposeN}/>
                    <form className='propose-form-form'>
                      <input type='text' title="Сюди ім'я" onClick={this.isRedFalseProposeN} value={this.state.proposeNameInput} onChange={this.handleProposeChangesName} required></input>
                      <LabelN isRedN={this.state.isRedProposeN} />
                    </form>
                  </div>
                  <div className='propose-form-field'>
                    <Number number='02' isRed={this.state.isRedProposeE}/>
                    <form className='propose-form-form'>
                      <input type='text' title="Опишіть нам проблему" onClick={this.isRedFalseProposeE} value={this.state.proposePositionInput} onChange={this.handleProposeChangesEmail} required></input>
                      <LabelE isRedE={this.state.isRedProposeE} isValid={this.state.isValidProposeEmail}/>
                    </form>
                  </div>
                  <div className='propose-form-fieldL'>
                    <Number number='03' isRed={this.state.isRedProposeP}/>
                    <form className='propose-form-form'>
                      <input type='text' title="Опишіть нам проблему" onClick={this.isRedFalseProposeP} value={this.state.proposeProblemInput} onChange={this.handleProposeChangesProblem} required></input>
                      <LabelP isRedP={this.state.isRedProposeP} />
                    </form>
                  </div>
              </div>
              <div className='propose-content-buttonandbutton'>
                <button className='propose-commitbutton' onClick={this.useClickOnButton}>Віправити</button>
              </div>
            </div>
              <div className='propose-content-image'>
                <img src={images.printmachine} alt='Black tree with white background' />
              </div>
          </div>
        </div>
      )
    }
}

export default TypePropose