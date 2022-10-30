import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../images/logo.svg'
import {Link} from 'react-scroll'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='header' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='header'spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='about'spy={true} smooth={true} offset={-150} duration={500}  onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='service' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='solution' spy={true} smooth={true} offset={-155} duration={500} onClick={closeMenu}>Solution</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={-155} duration={500} onClick={closeMenu}>Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/reacttable' onClick={closeMenu}>Dashboard</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/signup' onClick={closeMenu}>Sign up</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
