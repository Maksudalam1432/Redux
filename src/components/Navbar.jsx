import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex   justify-between   p-10 bg-gray-300 items-center  '>
        

  <h1 className='font-semibold text-xl' >Redux Store</h1>
       

       <div className='flex gap-8 mr-10 font-semibold text-xl'>


    <Link to ="/">HOME</Link>
    <Link to ="/Cart">CART</Link>
    <p>Cart item : <span>0</span></p>
        </div>
       </div>
  )
}

export default Navbar