import React from 'react'
import './solution.css'
import { Link } from 'react-router-dom'
import Abimage from '../../images/about.jpg'

const Solution = () => {
  return (
    <div className='about__header' id="solution">
      <div className='container about__header-container'>   
        <div className='about__header-left'>
          
          <div className='about__header-image'>
            <img src={Abimage} alt='HeaderImage'/>
          </div>
        </div>
        <div className='about__header-left'>
          <h4>Softwaare Development</h4>
          <h1>Leverage your Data to build Data driven applications.</h1>
          <p>We help Start-ups and Enterprises build intelligent, data-driven and scalable applications by leveraging 
            the power of Artificial Intelligence - Machine Learning, Data and Cloud. </p>
            <Link to='/services' className='btn lg'>Get Started</Link>
        </div> 
      </div>

    </div>
  )
}

export default Solution