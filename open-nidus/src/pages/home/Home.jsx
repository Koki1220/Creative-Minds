import React from 'react'
import Header from '../../components/Header'
import About from '../about/About'
import Testimonial from '../../components/Testimonial'
import Footer from '../../components/Footer'
import './home.css'
import Service from '../services/Service'
import Solution from '../solution/Solution'
import Contact from '../contact/Contact'
import Reacttable from '../../components/Reacttable'



const Home = () => {
  return (
    <>
    <Header/>
    <About/>
    <Service/>
    <Solution/>
    <Testimonial/>
    <Contact/>
    <Reacttable/>
    <Footer/>
    </>
  )
}

export default Home