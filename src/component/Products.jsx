/** @format */

import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import toast from "react-hot-toast";
import "./Product.css"


export default function Products({ post }) {
  const info = post.description.substring(0, 50);
  const { cart, setcart } = useContext(DataContext);
  function handler() {
    setcart((prevCart) => [...prevCart, post]);
    toast.success("Added to cart")
  }

  function removehandler() {
    const filteredCart = cart.filter((item) => item.id !== post.id);
    setcart(filteredCart);
    toast.error("Removed from cart")
  }

  return (
    <div className="flex relative  hover:scale-110 transition ease-in duration-300 flex-col justify-center p-6 items-center gap-4 rounded-lg hover:shadow-xl">
      <div>
        <p className="text-[15px] text-gray-700  font-semibold">{post.title}</p>
      </div>
      <div>
        <p className="text-gray-600 font-semibold text-[12px]">{info}</p>
      </div>
      <div className="w-[170px] h-[150px]">
        <img src={post.images[0]} className="w-full h-full" alt="" />
      </div>
      <div className="flex gap-16 mt-3 min-w-[190px] justify-between">
        <div>
          <p>${post.price}</p>
          
        </div>


        <div>

          {
            cart.some((item) => item.id === post.id) ? (<button onClick={removehandler} className=" bg-stone-700 text-[13px] rounded-lg py-1 px-3 text-white">Remove</button>) : (<button onClick={handler} className=" bg-stone-700  rounded-lg py-1 px-3 text-white text-[13px]">Add to Cart</button>)
          }
        </div>
      </div>
    </div>

    


    
  )
}
