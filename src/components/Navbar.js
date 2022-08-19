import React ,{useState} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar() {
    const[icon, setIcon] = useState(false)
    const hanleClick = () =>{
        setIcon(!icon)
    }
   
    return (
     <>  
        <nav className='navbar'>
        <Link to ='/' className='nav-logo'> Red Store</Link>       
          <div className='menu-icon'
          onClick={hanleClick}>
            {
                icon ? <FaTimes className='fa-times'></FaTimes>:<FaBars className='fa-times'></FaBars>
            }
          </div>
          <ul className={
            icon ? 'nav-menu active' : 'nav-menu'
          }>
              <Link to ='/' className='nav-links'>Home</Link>
            
            <li>
             <Link to ='books'  className='nav-links' >Books</Link>
            </li>
            <li>
              <Link to ='category'  className='nav-links'>Categories</Link>

            </li>
            <li>
             <Link to ='login'  className='nav-links'>Login</Link>
            </li>
            <li>
             <Link to ='signup'  className='nav-links'>Signup</Link>
            </li>
          </ul>  
       </nav>
     </>
    )
  }
  
  export default Navbar;