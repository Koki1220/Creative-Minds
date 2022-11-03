import React,{useEffect, useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';

const Scrolltop = () => {

    const [scrollTop, setScrollTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 300){
                setScrollTop(true)
              } 
              else{
                setScrollTop(false)
              }
            
        });
        
    },[])
  
    

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'

          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      

  return (
    <div>
        {scrollTop && <FaArrowCircleUp onClick={scrollToTop} className='scroll-btn'/> }
    </div>
    
  )
}

export default Scrolltop