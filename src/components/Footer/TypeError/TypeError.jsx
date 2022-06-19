import React from 'react'
import images from '../../../constants/images';

import './TypeError.css';



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
    return <div className='problem-field-lable'><p className='animSlideDownOne'>Ваше ім'я</p></div>
  }else{
    return <div className='problem-field-lable-error'><p className='animSlideUp'>Не соромтесь</p></div>
  }
}
function LabelE(props){
  if(props.isValid){
    return <div className='problem-field-lable'><p className='animSlideDownTwo'>Щось не так з поштою</p></div>
  }
  else if(!props.isRedE){
    return <div className='problem-field-lable'><p className='animSlideDownTwo'>Ваша пошта</p></div>
  }else if(props.isRedE){
    return <div className='problem-field-lable-error'><p className='animSlideUp'>Це для зв'язку з вами</p></div>
  }
}
function LabelP(props){
  if(!props.isRedP){
    return <div className='problem-field-lable'><p className='animSlideDownThree'>Вдих, видих вирішемо!</p></div>
  }else{
    return <div className='problem-field-lable-error'><p className='animSlideUp'>Так... Чим вам допомогти?</p></div>
  }
}

class TypeError extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      problemNameInput: '',
      problemEmailInput: '',
      problemProblemInput: '',
      isRedProblemN: false,
      isRedProblemE: false,
      isRedProblemP: false,
      isValidProblemEmail: false
    }


    this.handleProblemChangesName = this.handleProblemChangesName.bind(this);
    this.handleProblemChangesEmail = this.handleProblemChangesEmail.bind(this);
    this.handleProblemChangesProblem = this.handleProblemChangesProblem.bind(this);
    this.useClickOnButton = this.useClickOnButton.bind(this);
    this.isRedFalseProblemN = this.isRedFalseProblemN.bind(this);
    this.isRedFalseProblemE = this.isRedFalseProblemE.bind(this);
    this.isRedFalseProblemP = this.isRedFalseProblemP.bind(this);
  }

  handleProblemChangesName(e){
    this.setState({problemNameInput: e.target.value});
  }

  handleProblemChangesEmail(e){
    this.setState({problemEmailInput: e.target.value});
  }

  handleProblemChangesProblem(e){
    this.setState({problemProblemInput: e.target.value});
  }


  isRedFalseProblemN(){ this.setState({isRedProblemN: false});}
  isRedFalseProblemE(){ this.setState({isRedProblemE: false}); this.setState({isValidProblemEmail: false})}
  isRedFalseProblemP(){ this.setState({isRedProblemP: false});}
  isValidProblemEmail(){ this.setState({isValidProblemEmail: false});}

  
  useClickOnButton(){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(this.state.problemNameInput !== '' && this.state.problemEmailInput !== '' && this.state.problemProblemInput !== '' && regex.test(this.state.problemEmailInput) === true){
      console.log('OKKKKK')
    }
    if(this.state.problemNameInput === ''){
      this.setState({isRedProblemN: true,});
    }
    if(this.state.problemEmailInput === ''){
      this.setState({isRedProblemE: true});
    }else if (regex.test(this.state.problemEmailInput) === false){
      this.setState({isValidProblemEmail: true});
      this.setState({isRedProblemE: true});
    }
    if(this.state.problemProblemInput === ''){
      this.setState({isRedProblemP: true});
    }
  }

  
  render(){

  return (
    <div className='app__footer_problem-mainSubstrate' onClick={(e) => e.stopPropagation()}>
      <div className='problem-mainSubstrate-content'>
          <div className='problem-content-form-arrowSeven'>
            <img src={images.arrownine} alt="Arrow seven" />
          </div>
        <div className='problem-content-form'>
          <div className='problem-content-form-fields'>
              <div className='problem-form-field'>
                <Number number='01' isRed={this.state.isRedProblemN}/>
                <form className='problem-form-form'>
                  <input type='text' title="Сюди ім'я" onClick={this.isRedFalseProblemN} value={this.state.problemNameInput} onChange={this.handleProblemChangesName} required></input>
                  <LabelN isRedN={this.state.isRedProblemN} />
                </form>
              </div>
              <div className='problem-form-field'>
                <Number number='02' isRed={this.state.isRedProblemE}/>
                <form className='problem-form-form'>
                  <input type='text' title="Опишіть нам проблему" onClick={this.isRedFalseProblemE} value={this.state.problemPositionInput} onChange={this.handleProblemChangesEmail} required></input>
                  <LabelE isRedE={this.state.isRedProblemE} isValid={this.state.isValidProblemEmail}/>
                </form>
              </div>
              <div className='problem-form-fieldL'>
                <Number number='03' isRed={this.state.isRedProblemP}/>
                <form className='problem-form-form'>
                  <input type='text' title="Опишіть нам проблему" onClick={this.isRedFalseProblemP} value={this.state.problemProblemInput} onChange={this.handleProblemChangesProblem} required></input>
                  <LabelP isRedP={this.state.isRedProblemP} />
                </form>
              </div>
          </div>
          <div className='problem-content-buttonandbutton'>
            <div className='problem-buttoninput'>
              <button className='problem-filebutton'>Прикріпити файл</button>
              <input type="file" />
            </div>
            <button className='problem-commitbutton' onClick={this.useClickOnButton}>Віправити</button>
          </div>
        </div>
          <div className='problem-content-image'>
            <img src={images.printmachine} alt='Black tree with white background' />
          </div>
      </div>
    </div>
  )
  }

}

export default TypeError