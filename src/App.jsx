import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Cart from './page/Cart'
import Navbar from './components/Navbar'
import {Provider} from "react-redux"
import store from './store/store'
function App() {
  return (
    <div>
      <Provider store={store}>


        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}  />33
      </Routes>
      </Provider>
    </div>
  )
}

export default App