import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link, Router} from 'react-router-dom'
import './App.css'

import { Home } from './components/home'
import { About } from './components/about'
import { Navbar } from './components/navbar/navbar'
import { Form } from './components/form'
import { Cartapi } from './components/cartapi'

function App() {

  
  
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
    
     <Route path='/about' element={<About/>}>
     </Route>
      <Route path='/form' element={<Form/>} />
      <Route path='/cartapi' element={<Cartapi/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
