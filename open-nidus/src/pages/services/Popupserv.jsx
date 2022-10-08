import React from 'react'
import Abimage from '../../images/about.jpg'
import './service.css'

const Popupserv = ({closeDailog}) => {
  return (
    <div className='popup__bacground'>
    <div className='popup popup__container'>
      <div className='titleCloseBtn'>
       <button onClick={()=> closeDailog(false)}>X </button>
      </div>
        <div className='title'>
            <h1>Outsourced Product Development</h1>
        </div>
        <div className='image'>
             <img src={Abimage} alt=''/>
        </div>
        <div className='body'>
            <p>with ever increasing business complexities and rapid market changes, there is an increasing urgency  
            for all companies to leverage technology solutions  while improving focus on your core businesses. 
            We aim to be your reliable IT partner providing innovative products, generating value with custom solutions, architecting your technology road-map while ensuring delivery of the highest quality.The product development model we use depends largely on the size of engagement and the type of technology used. From mission critical applications to setting up an entire ODC (Offshore Development Center),
            we manage every single development process with the same level of integrity and commitment.</p>
        </div>
        
    </div>
</div>
  )
}

export default Popupserv