import React from 'react'
import './contact.css'
import Conimage from '../../images/contact.jpg'

const Contact = () => {
  return (
    <div className='contact__header' id="contact">
      <div className='container contact__header-container'>         
                
          <div className='contact__header-image'>
            <img src={Conimage} alt='ContactImage'/>
          </div>
        
      </div>

    </div>
  )
}

export default Contact