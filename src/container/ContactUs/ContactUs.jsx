import React from 'react'
import images from '../../constants/images';


import './ContactUs.css';


class CotactUs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      backgroundImage: images.bench
    }
  }


  render(){
    return(
      <div className='app__contactUs' style={{backgroundImage: "url(" + this.state.backgroundImage + ")"}} >
        
      </div>
    )
  }
}

export default CotactUs;