import React, { useContext } from 'react'
import { Trash2 } from 'lucide-react';
import toast from "react-hot-toast";
import { DataContext } from '../context/DataContext';
export default function CartItem({ post }) {
  const { cart, setcart } = useContext(DataContext)
  function removehandler() {
    const filteredCart = cart.filter((item) => item.id !== post.id);
    setcart(filteredCart);
    toast.error("Removed from cart")
  }
  return (
    <div className="flex justify-center p-3 gap-5 border-b-2 items-center shadow-md">
      <div className="max-w-[150px] max-h-[150px]">
        <img src={post.images[2]} className="w-full h-full" alt="" />
      </div>
      <div>
        <div>
          <p className="text-lg text-gray-700 font-semibold">{post.title}</p>
        </div>
        <div>
        
          <p className="text-gray-600 text-[13px]">{post.description}</p>
        </div>
        <div className="flex gap-16 mt-6 items-center  justify-around">
          <div>
            <p>${post.price}</p>
          </div>
          <div className=' hover:text-red-800 cursor-pointer'>
            <Trash2 onClick={removehandler} size={20}
            />
            
          </div>
          
        </div>
      </div>

    </div>
  );
}
