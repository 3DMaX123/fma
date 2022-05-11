import React from 'react'

import './ReviewPhone.css';
import images from '../../../constants/images';

const ReviewPhone = () => {
  return (
    <div className='app__reviewphone'>
      <div className='review-label'>
        <div className='review-label-text'><p>Написати відгук</p></div>
        <div className='review-label-review'>Відгуки</div>
        <img className='review-label-star' src={images.starrate} alt="star"/>
        <div className='review-label-star-rate'>4</div>
      </div>
        <img className='review_palm' src={images.cutpalm} alt="Full palm"/>
        <img className='review_palm2' src={images.cutpalm} alt="Full palm"/>
        <div className='reviewphone_fma'>
        FMA
        </div>
        <div className='reviewphone_fma_whiteBorder1'></div>
        <div className='reviewphone_fma_whiteBorder2'></div> 
        <img className='review_palm3' src={images.cutpalm} alt="Full palm"/>
    </div>
  )
}

export default ReviewPhone