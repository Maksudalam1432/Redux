import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/Cardslice';
function Product() {

   
  const Dispatch=useDispatch()
  
    const [products,setproducts]=useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setproducts(data)
    };
    fetchProduct();
  }, []);



  const handleclclick=(product)=>{
     Dispatch(add(product))
  }

  return (
    <div className="p-5 flex justify-center gap-8  flex-wrap">
     
    {products.map((items)=>(

        <div
        key={items.id}
        className="h-[290px] w-[250px] bg-gray-200 rounded-md shadow-md 
        hover:shadow-2xl 
        flex flex-col items-center"
        >
        <img
          className="h-[180px] w-full object-cover rounded-t-md"
          src={items.image}
          alt="flower"
          />
        <h3 className="mt-3 font-semibold">Name: {items.title.slice(0,6)   }</h3>
        <h3 className="font-semibold">Price: ${items.price}</h3>
        <button className='px-2  py-2 mt-1 rounded-md bg-blue-500   ' onClick={()=>handleclclick(items

        )}>Add Cart</button>
      </div>
))}
    </div>
  );
}

export default Product;
