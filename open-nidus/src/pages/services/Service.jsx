import React from 'react'
import './service.css'
import Abimage from '../../images/about.jpg'

const Service = () => {
  return (
    <div className='about__header' id="service">
      <div className='container about__header-container'>           
          
          <div className='about__header-image'>
            <img src={Abimage} alt='HeaderImage'/>
          </div>
        
      </div>

    </div>
  )
}

export default Service