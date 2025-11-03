import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/Cardslice';
function Cart() {
  const Dispatch=useDispatch()
  const products = useSelector((state) => state.cart);
  const handlebtn=(productid)=>{
    Dispatch(remove(productid))
  }

  return (
    <div className="font-semibold text-2xl p-8">
      <h2 className="text-3xl mb-5">🛒 Cart</h2>
      <div className="flex flex-wrap gap-6">
        {products.length > 0 ? (
          products.map((pro) => (
            <div
              key={pro.id}
              className="border rounded-lg p-4 bg-gray-100 w-[250px] flex flex-col items-center"
            >
              <img
                src={pro.image}
                alt={pro.title}
                className="h-[150px] object-contain mb-3"
              />
              <h4 className="text-lg font-semibold mb-1 text-center">
                {pro.title.slice(0, 20)}...
              </h4>
              <h4 className="text-gray-700 mb-2">${pro.price}</h4>
              <button onClick={()=>handlebtn(pro.id)}  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Remove item
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your cart is empty 🛍️</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
