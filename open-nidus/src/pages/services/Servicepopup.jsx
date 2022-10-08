import React from 'react'
import Abimage from '../../images/about.jpg'
import './service.css'

const Servicepopup = ({closeDailog}) => {
  return (
    <div className='dailog__bacground'>
    <div className='dailog dialog__container'>
      <div className='titleCloseBtn'>
       <button onClick={()=> closeDailog(false)}>X </button>
      </div>
        <div className='title'>
            <h1>Custom Software Development</h1>
        </div>
        <div className='image'>
             <img src={Abimage} alt=''/>
        </div>
        <div className='body'>
            <p>We strongly believe that the success of any custom software development process depends largely 
               on the level of communication, planning, collaboration, and management of resources between
               the client and the technology partner.OpenNidus simplifies the complex activity of custom
               the complex activity of custom software development by embracing DevOps that increases collaboration between the technology and operations team. We strive to build an organizational interface that enables us to be an extension of your business.We develop a time-bound roadmap that compliments the client organizations vision and goals for the software development process, beginning at the inception of solution to the final delivery involving training and handholding necessary for organizational integration.We build enterprise applications that cater to specific needs of client business that adapts dynamically needs that evolves on implementation.</p>
        </div>
        
    </div>
</div>
  )
}

export default Servicepopup