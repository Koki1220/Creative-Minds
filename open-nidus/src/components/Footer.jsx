import {Link} from 'react-scroll';
import Logo from '../images/logo.svg';
import {AiFillLinkedin,AiFillTwitterCircle,AiFillFacebook,AiFillInstagram} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

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
            <article clas>
                <h4>Permalinks</h4>
                <Link to='about'spy={true} smooth={true} offset={-150} duration={500}className='footer__link'>About Us</Link>
                <Link to='service' spy={true} smooth={true} offset={-150} duration={500}  className='footer__link'>Services</Link>
                <Link to='solution' spy={true} smooth={true} offset={-155} duration={500} className='footer__link'>Solution</Link>
                <Link to="contact" spy={true} smooth={true} offset={-155} duration={500} className='footer__link'>Contact Us</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <NavLink to="/blog" className='footer__link'> Blog</NavLink>
                <NavLink to="/case-studies" className='footer__link'>Case Studies</NavLink>
                <NavLink to="/events" className='footer__link'>Events</NavLink>
                <NavLink to="/communites" className='footer__link'>Communites</NavLink>
                <NavLink to="/faqs"className='footer__link'>FAQs</NavLink>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="contact"  spy={true} smooth={true} offset={-155} duration={500} className='footer__link'>Contact Us</Link>
                <NavLink to="/support" className='footer__link'>Support</NavLink>
            </article>
        </div>
        <div className='footer__copyright'>
            <small>2022 OPEN NIDUS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer