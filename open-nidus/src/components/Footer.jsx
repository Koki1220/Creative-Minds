import {Link} from 'react-router-dom';
import Logo from '../images/logo.svg';
import {AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook,AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
            <div className='container footer__container'>
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt='Footer Logo'/>
                </Link>
                <p>Nidus ERPis give you the best company to satisfy your project in the good manner.
                    We are flexible with the custom design as per the customer needs.</p>
                <div className='footer__socials'>
                    <a href='https://linkedin.com' target="_blank" rel='noreferrer noopener'><AiFillLinkedin/></a>
                    <a href='https://facebook.com' target="_blank" rel='noreferrer noopener'><AiFillFacebook/></a>
                    <a href='https://twitter.com' target="_blank" rel='noreferrer noopener'><AiFillTwitterCircle/></a>
                    <a href='https://instagram.com' target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about-us" className='footer__link'>About Us</Link>
                <Link to="/services" className='footer__link'>Services</Link>
                <Link to="/solution" className='footer__link'>Solution</Link>
                <Link to="/Contact-us" className='footer__link'>Contact Us</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s" className='footer__link'> Blog</Link>
                <Link to="/s" className='footer__link'>Case Studies</Link>
                <Link to="/s" className='footer__link'>Events</Link>
                <Link to="/s" className='footer__link'>Communites</Link>
                <Link to="/s"className='footer__link'>FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact-us" className='footer__link'>Contact Us</Link>
                <Link to="/s" className='footer__link'>Support</Link>
            </article>
        </div>
        <div className='footer__copyright'>
            <small>2022 OPEN NIDUS &copy; All Rights Reserved</small>
        </div>
    </footer>
    
  )
}

export default Footer