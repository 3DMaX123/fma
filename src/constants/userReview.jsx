import React from 'react'
import images from './images';
import ShortErrorBoundary from './ErrorsBoundary/shortErrorBoundary';


function Stars(props){

  const yellowstars = <img src={images.starrate} alt="Stars rate" />;
  const greyStars = <img className='GreyStars' src={images.greystarrate} alt="Stars rate"/>
  const countOfStars = props.Stars;
  const countYellowStars = [];
  const countGreyStars = [];

  if(isNaN(countOfStars)){
    for (let index = 0; index < 5; index++) {
      throw new Error('ff');
      // countGreyStars[index] = greyStars;
    }
  }
  else if(countOfStars <= 5){
    for (let index = 0; index < countOfStars; index++) {
      countYellowStars[index] = yellowstars;
    }
    for (let index = 0; index < 5 - countOfStars; index++) {
      countGreyStars[index] = greyStars;
    }
  }
  else if(countOfStars === 5){
    countGreyStars = null;
  }
  else if(countOfStars > 5){
    for (let index = 0; index < 5; index++) {
      countYellowStars[index] = yellowstars;
    }
  }



  return(
    <div className='Stars'>
      {countYellowStars}
      {countGreyStars}
    </div>
  )
}

function NamePositionCompanyAndStars(props){
  return (
    <div className='NamePositionCompanyAndStars'>
    <NameAndPosition Name={props.Name} PositionSign={props.PositionSign} NameOfCompany={props.NameOfCompany} />
    <ShortErrorBoundary>
    <Stars Stars={props.Stars} />
    </ShortErrorBoundary>
  </div>
  );
}

function NameAndPosition(props){
  return (
    <div className='NameAndPosition'>
    <ShortErrorBoundary>
    <Name Name={props.Name}/>
    </ShortErrorBoundary>
    <Position  PositionSign={props.PositionSign} NameOfCompany={props.NameOfCompany} />
    </div>
  );
}

function Name(props){
  return <p className='Name'>{props.Name}</p>;
}

function Position(props){  
  return(
    <div className='Position'>
      <ShortErrorBoundary>
        <PositionSign PositionSign={props.PositionSign} />
      </ShortErrorBoundary>
      <p className='OfSign'>of</p>
      <ShortErrorBoundary>
      <NameOfCompany NameOfCompany={props.NameOfCompany} />
      </ShortErrorBoundary>
    </div>
  );
}

function PositionSign(props){
  return <p className='PositionSign'>{props.PositionSign}</p>;
}

function NameOfCompany(props){
  return <p className='NameOfCompany'>{props.NameOfCompany}</p>;
}


function UserReview(props){
  return ( 
    <div className='UserReview'>
      <p>{props.Review}</p>
    </div>
  )
}


class userReviews extends React.Component {
  render(){
    return (
      <div className='review'>
      <div className='ReviewContent'>
        <NamePositionCompanyAndStars Name={this.props.Name} PositionSign={this.props.PositionSign} NameOfCompany={this.props.NameOfCompany} Stars={this.props.Stars} />
        <ShortErrorBoundary>
          <UserReview Review={ this.props.Review} />
        </ShortErrorBoundary>
      </div>
    </div>
    )
  }
}

export default userReviews








/*     
  <div className='review'>
      <div className='ReviewContent'>
        <div className='NamePositionCompanyAndStars'>
          <div className='NameAndPosition'>
            <p className='Name'>Олександр</p>
            <div className='Position'>
              <p className='PositionSign'>Co-CEO</p>
              <p className='OfSign'>of</p>
              <p className='NameOfCompany'>Feed Motion ADS</p>
            </div>
          </div>
          <div className='Stars'>
            <img src={images.starrate} alt="" />
            <img src={images.starrate} alt="" />
            <img src={images.starrate} alt="" />
            <img src={images.starrate} alt="" />
            <img src={images.starrate} alt="" />
          </div>
        </div>
        <p className='UserReview'>Були проведені чудові роботи. Налаштували оптимізували та підказали</p>
      </div>
    </div>

 */