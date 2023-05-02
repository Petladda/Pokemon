import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'

import { Home } from './components/home'
import { About } from './components/about'
import { Navbar } from './components/navbar/navbar'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/home" element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
