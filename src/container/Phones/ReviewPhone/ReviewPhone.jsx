import React from 'react'
import ReviewForm from '../../Review/UserReview/userReview';
import images from '../../../constants/images';
import ScrollContainer from 'react-indiana-drag-scroll'


import './ReviewPhone.css';

const ReviewPhone = () => {
  return (
    <div className='app__reviewphone' id='reviewsphone'>
      <div className='review-label'>
        <button className='review-label-button'>Написати відгук</button>
        <p className='review-label-review'>Відгуки</p>
        <img className='review-label-star' src={images.starrate} alt="star"/>
        <p className='review-label-star-rate'>4</p>
      </div>
      <ScrollContainer className='Reviews'>
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="5"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказали"
        />
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="5"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиБули "
        />
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="5"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували "
        />
        <ReviewForm 
          Name="Олександр"
          PositionSign="Co-Ceo" 
          NameOfCompany="Feed Motion ADS" 
          Stars="5"
          Review="Були проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиБули проведені чудові роботи. Налаштували оптимізували та підказалиegegegegerggerger"
        />
      </ScrollContainer>

      <img className='review_palm' src={images.cutfullpalm} alt="Full palm"/>
      <img className='review_palm2' src={images.cutfullpalm} alt="Full palm"/>
      <img className='review_palm3' src={images.cutpalm} alt="Full palm"/>
      <img className='arrowphone_contactus' src={images.phonearrowfife} alt="arrow"/>
    </div>
  )
}

export default ReviewPhone