import React,{useEffect, useState} from 'react'
import {MdArrowUpward} from 'react-icons/md';

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
        });
      };     
      

  return (
    <div>
        {scrollTop && <MdArrowUpward onClick={scrollToTop} className='scroll-btn'/> }
    </div>
    
  )
}

export default Scrolltop