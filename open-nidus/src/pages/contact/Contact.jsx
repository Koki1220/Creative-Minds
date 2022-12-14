import React from 'react'
import {MdOutlineMailOutline} from 'react-icons/md'
import SectionHead from '../../components/SectionHead'
import {AiOutlineLinkedin,AiOutlineWhatsApp} from 'react-icons/ai'
import {RiCustomerService2Line} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_567ewck', 'template_ckj1u7d', form.current, 'fChiJGXUa7Lk3Tt31')
    e.target.reset()
     
    
  };
  return (
    <section  id="contact">
       <SectionHead icon={<RiCustomerService2Line/>} title="Contact Us" className="testimonials__head"/>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>opennidus@gmail.com</h5>
            <a href='mailto:opennidus@gmail.com' target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linked In</h4>
            <h5>view our profile</h5>
            <a href='https://www.linkedin.com/login'target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>What's App</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone+919486528145'target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* Right side */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea type="message" name="meassage" rows='?' placeholder="Your Message" required />
          <button type='submit' className='contact__btn'>Send Message</button>
         </form>
      </div>
  </section>
  )
}

export default Contact