import React, {useState} from 'react'
import './service.css'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import Abimage from '../../images/about.jpg'
import SectionHead from '../../components/SectionHead'
import {BiCheck} from 'react-icons/bi'
import Popupserv from './Popupserv'
import Servicepopup from './Servicepopup'



const Service = () => {


  const[openDailog,setOpenDailog]=useState(false);
  const[openPopup,setOpenPopup]=useState(false);
  

  return (
    <section id="service">
       <SectionHead icon={<MdOutlineMiscellaneousServices/>} title="Services" className="testimonials__head"/>
       <div className='container service__container'>
        <article className='service__item'>
          <div className='service__item-image'>
            <img src={Abimage} alt=''/>
          </div>
          <h3>Custom Software Development</h3>
          <h5>We strongly believe that the success of any custom software development process depends largely on 
            the level of communication, planning, collaboration, and management of resources between....</h5>
          <div className='service__item-btn'>
          <button className='service__btn' onClick={() => setOpenDailog(true)}>Learn more</button>          
          </div>
        </article>

        {openDailog && <Servicepopup closeDailog= {setOpenDailog}/>}
        
        <article className='service__item'>
            <div className='service__item-image'>
              <img src={Abimage} alt=''/>
            </div>
            <h3>Outsourced Product Development</h3>
            <h5>With ever increasing business complexities and rapid market changes, there is an increasing urgency  
              for all companies to leverage technology solutions....</h5>
            <div className='service__item-btn'>
              <button className='service__btn'  onClick={() => setOpenPopup(true)} >Learn more</button>
            </div>
        </article>
        {openPopup && <Popupserv closeDailog = {setOpenPopup}/>}

        <article className='our__service'>
        <div className='service__head'>
          <h3>Our Services</h3>
          <div className='service__list-image'>
            <img src={Abimage} alt=''/>
          </div>
        </div>
        
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Product Engineering</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Integration Services</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Migration</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Re-engineering</p>
          </li>
        </ul>
        </article>

       
       </div>
      
    </section>
    
    
  )
}

export default Service