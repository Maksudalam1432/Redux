import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Cart from './page/Cart'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}  />33
      </Routes>
    </div>
  )
}

export default App