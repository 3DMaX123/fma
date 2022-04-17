import React, { useContext } from 'react'
import images from './images';
import ShortErrorBoundary from './ErrorsBoundary/shortErrorBoundary';

const ReviewData = React.createContext();


function Stars(){

  const { stars } = useContext(ReviewData);

  const yellowstars = <img src={images.starrate} alt="Stars rate" />;
  const greyStars = <img className='GreyStars' src={images.greystarrate} alt="Stars rate"/>
  const countYellowStars = [];
  const countGreyStars = [];

  if(isNaN(stars)){
    for (let index = 0; index < 5; index++) {
      countGreyStars[index] = greyStars;
    }
  }
  else if(stars <= 5){
    for (let index = 0; index < stars; index++) {
      countYellowStars[index] = yellowstars;
    }
    for (let index = 0; index < 5 - stars; index++) {
      countGreyStars[index] = greyStars;
    }
  }
  else if(stars === 5){
    countGreyStars = null;
  }
  else if(stars > 5){
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

function NamePositionCompanyAndStars(){
  return (
    <div className='NamePositionCompanyAndStars'>
    <NameAndPosition />
    <ShortErrorBoundary>
    <Stars />
    </ShortErrorBoundary>
  </div>
  );
}

function NameAndPosition(){
  return (
    <div className='NameAndPosition'>
    <ShortErrorBoundary>
    <Name />
    </ShortErrorBoundary>
    <Position />
    </div>
  );
}

function Name(){
  const { name } = useContext(ReviewData);

  return <p className='Name'>{name}</p>; ///////////////////////////////////////////////////////////////////////////////////////
}

function Position(){  
  return(
    <div className='Position'>
      <ShortErrorBoundary>
        <PositionSign />
      </ShortErrorBoundary>
      <p className='OfSign'>of</p>
      <ShortErrorBoundary>
      <NameOfCompany />
      </ShortErrorBoundary>
    </div>
  );
}

function PositionSign(){
  const { positionSign } = useContext(ReviewData);

  return <p className='PositionSign'>{positionSign}</p>;
}

function NameOfCompany(){
  const { nameOfCompany } = useContext(ReviewData);

  return <p className='NameOfCompany'>{nameOfCompany}</p>;
}


function UserReview(){
  const { review } = useContext(ReviewData);

  return ( 
    <div className='UserReview'>
      <p>{review}</p>
    </div>
  )
}


class userReviews extends React.Component {

  render(){

    const reviewsData = {
      name: this.props.Name,
      positionSign: this.props.PositionSign,
      nameOfCompany: this.props.NameOfCompany,
      stars: this.props.Stars,
      review: this.props.Review
      }

    return (
      <div className='review'>
      <div className='ReviewContent'>
        <ReviewData.Provider value={reviewsData}>
          <NamePositionCompanyAndStars />
          <ShortErrorBoundary>
              <UserReview />
          </ShortErrorBoundary>
        </ReviewData.Provider>
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