import React from 'react'
import { Link } from 'react-scroll'
import Bgimage from '../images/devbg.jpg'
import Scrolltop from './Scrolltop'
import NumberCounter from 'number-counter'



const Header = () => {
  return (
    <header className='main__header' id="header">
      <Scrolltop />
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h1>Nidus ERP is welcoming you for the world of web designing and development.</h1>
          <p>Nidus ERPis give you the best company to satisfy your project in the good manner. We are flexible with the custom design as per the customer needs.</p>
          <div className='figures'>
            <div>
              <h4>
                <NumberCounter end={25} start={10} delay='4' postFix="+" />
              </h4>
              <small>Products</small>
            </div>
            <div>
              <h4>
                <NumberCounter end={10} start={1} delay='4' postFix="+" />
              </h4>
              <small>Technologies</small>
            </div>
          </div>
          <Link to='service' className='btn lg'>Know More</Link>


        </div>

        <div className='main__header-right'>
          <div className='main__header-image'>
            <img src={Bgimage} alt='HeaderImage' />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header