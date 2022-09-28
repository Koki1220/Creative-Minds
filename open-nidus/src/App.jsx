import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/services/Service'
import Solution from './pages/solution/Solution'
import Contact from './pages/contact/Contact'
import Notfound from './pages/notfound/Notfound'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about-us' element={<About/>}/>
        <Route path='services' element={<Service/>}/>
        <Route path='solution' element={<Solution/>}/>
        <Route path='contact-us' element={<Contact/>}/>
        <Route path='*' element={<Notfound/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
