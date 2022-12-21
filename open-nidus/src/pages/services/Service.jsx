import React, { useState } from 'react'
import './service.css'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import Abimage from '../../images/about.jpg'
import custimage from '../../images/customs.jpg'
import productimage from '../../images/product.jpg'
import SectionHead from '../../components/SectionHead'
import { BiCheck } from 'react-icons/bi'
import { FaWindowClose } from 'react-icons/fa'




const Service = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section id="service">
      <SectionHead icon={<MdOutlineMiscellaneousServices />} title="Services" className="testimonials__head" />
      <div className='services__container container'>
        <div className='services-content'>
          <div>
            <img src={custimage} alt='' />
          </div>
          <h4>Custom Software Development</h4>
          <p className='services__modal-description'>
            We strongly believe that the success of any custom software development process depends largely
            on the level communication,planning, collaboration...</p>

          <button className='services__btn' onClick={() => toggleTab(1)}> View More</button>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className='services__modal-content'>
              <FaWindowClose className='services__modal-close' onClick={() => toggleTab(0)} />
              <h3 className='services__modal-title'>Custom Software Development</h3>
              <ul>
                <li className='services__modal-services'>
                  <p className='services__modal-info'>
                    We strongly believe that the success of any custom software development process depends largely
                    on the level of communication, planning, collaboration, and management of resources between the
                    client and the technology partner.OpenNidus simplifies the complex activity of custom the complex
                    activity of custom software development by embracing DevOps that increases collaboration between
                    the technology and operations team. We strive to build an organizational interface that enables us
                    to be an extension of your business.We develop a time-bound roadmap that compliments the client
                    organizations vision and goals for the software development process, beginning at the inception of
                    solution to the final delivery involving training and handholding necessary for organizational integration.
                    We build enterprise applications that cater to specific needs of client business that adapts dynamically needs that evolves on implementation.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='services-content'>
          <div>
            <img src={productimage} alt='' />
          </div>
          <h4>Outsourced Product Development</h4>
          <p className='services__modal-description'>
            With ever increasing business complexities and rapid market changes, there is an increasing urgency
            for all companies to leverage technology solutions while improving focus on your...</p>

          <button className='services__btn' onClick={() => toggleTab(2)}> View More</button>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className='services__modal-content'>
              <FaWindowClose className='services__modal-close' onClick={() => toggleTab(0)} />
              <h3 className='services__modal-title'>Outsourced Product Development</h3>
              <ul className='services__modal-services'>
                <li className='services__modal-service'>
                  <BiCheck />
                  <p className='services__modal-info'>
                    With ever increasing business complexities and rapid market changes, there is an increasing urgency
                    for  all companies to leverage technology solutions  while improving focus on your core businesses.
                    We aim to be your reliable IT partner providing innovative products, generating value with custom solutions, architecting your technology road-map while ensuring delivery of the highest quality.The product development model we use depends largely on the size of engagement and the type of technology used. From mission critical applications to setting up an entire ODC (Offshore Development Center),
                    we manage every single development process with the same level of integrity and commitment.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <article className='our__service'>
          <div className='service__head'>
            <h3>Our Services</h3>
            <div className='service__list-image'>
              <img src={Abimage} alt='' />
            </div>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Product Engineering</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Migration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Re-engineering</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>

  )
}

export default Service