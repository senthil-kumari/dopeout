
import React from 'react'
import './style.scss';
import illustration from '../../assets/illustration.svg';

function HeroSlider() {
  return (
    <div className='hero-container'>
    <div>
        <img src={illustration} alt="people working" />
    </div>
    
     <div className="hero-text">
          <div className='hero-text-main'>
          Dopeout
          </div>
        <div className='hero-text-sub'>
        Create innovate and share 
        </div>
     </div>

    </div>
  )
}

export default HeroSlider