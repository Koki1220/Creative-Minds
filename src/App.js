import React from 'react';
import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import Login from './components/Login';
import Signup from './components/Signup';
import Categories from './components/Categories';
import Notfound from './components/Notfound';

function App() {
  return (
   
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/"   element = {<Home />}/>
        <Route path='/books' element= {<Books/>}/>
        <Route path='/category' element= {<Categories/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='*' element={<Notfound/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App;