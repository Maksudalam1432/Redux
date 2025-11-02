import React from 'react'
import Product from '../components/Product'

function Home() {
  return (
    <div className='flex flex-col items-center p-20 '>
      <h1 className='font-semibold text-xl mb-6'>
        WELCOME TO THE REDUX TOOLKIT STORE
      </h1>

    
      <div className='flex flex-wrap justify-center gap-8'>
        <Product />
       
      </div>
    </div>
  )
}

export default Home
