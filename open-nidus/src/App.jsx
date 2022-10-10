import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Notfound from './pages/notfound/Notfound'
import Navbar from './components/Navbar'
import Reacttable from './components/Reacttable'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        
        <Route path='/reacttable' element={<Reacttable/>}/>
        <Route path='*' element={<Notfound/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
