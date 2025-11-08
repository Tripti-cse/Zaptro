import React from 'react'
import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa'

const Cart = () => {
  const {cartItem,updateQuantity,deleteItem} =useCart()
  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0);

  
  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5 md:px-0'>
    {
      cartItem.length> 0 ?<div>
        <h1 className='font-bold text-2xl'>My Cart({cartItem.length})</h1>
        <div>
          <div className='mt-10'>
          {cartItem.map((item,idx)=>{
           return <div key={idx} className='bg-gray-200 p-5 rounded-md flex items-center justify-between mt-3 w-full'>
            <div className='flex items-center gap-4'>
              <img src={item.image} alt={item.title} className='w-20 h-20 rounded-md'/>
              <div>
                <h1 className='md:w-[300px] line-clamp-2'>{item.title}</h1>
                <p className='text-red-500 font-semibold text-lg '>${item.price}</p>
              </div>
            </div>
            <div className='bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl'>
              <button onClick={()=>updateQuantity(item.id,"decrease")} className='cursor-pointer'>-</button>
              <span>{item.quantity}</span>
              <button  onClick={()=>updateQuantity(item.id,"increase")} className='cursor-pointer'>+</button>
            </div>
            <span onClick={()=>deleteItem(item.id)}  className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
            <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer'/>
              </span>
           </div>
          })}
          </div>
           <div className='flex justify-end mt-8'>
            <div className='text-xl font-medium'>
              <span className='text-red-600'>Total: </span>
              <span className='text-gray-600 font-bold'>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>: <div></div>
    }
    </div>
  )
}

export default Cart