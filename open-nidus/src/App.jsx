import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Notfound from './pages/notfound/Notfound'
import Navbar from './components/Navbar'
import Reacttable from './components/Reacttable'
import Registration from './pages/forms/Registration'
import Login from './pages/forms/Login'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>        
        <Route path='/reacttable' element={<Reacttable/>}/>
        <Route path='*' element={<Notfound/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
