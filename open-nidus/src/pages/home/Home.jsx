import React from 'react'
import Header from '../../components/Header'

import About from '../about/About'

import Footer from '../../components/Footer'
import './home.css'
import Service from '../services/Service'
import Solution from '../solution/Solution'
import Contact from '../contact/Contact'


const Home = () => {
  return (
    <>
    <Header/>
    <About/>
    <Service/>
    <Solution/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home