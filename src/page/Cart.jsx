/** @format */

import { useContext, useState, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import CartItem from "../component/CartItem";

export default function Cart() {
  const { cart } = useContext(DataContext);
  const [total, settotalamount] = useState(0);
  useEffect(() => {
    settotalamount(cart.reduce((h1, h2) => (
      h1 + h2.price
    ), 0))
  }, [cart])
  return (
    <div className="mt-10">
      <div className="flex max-w-[1080px] py-8 gap-6 flex-col xl:flex-row mx-5 xl:mx-auto justify-center items-start ">
        <div className="flex-1 space-y-6">
          {
            cart.map((data) => (
              <CartItem post={data} key={data.id} ></CartItem>
            ))
          }
        </div>
        <div className="gap-6 flex flex-col min-h-[400px] w-full flex-1  p-5 shadow-inner">
          <p className="text-2xl">Total items :  {cart.length}</p>
          <div className="mt-auto text-lg">
            <p>Total Amount : ${Math.floor(total)}</p>
          </div>
          <button onClick={() => alert("Of Course this will not work in frontend")} className="w-full hover:bg-gray-700 bg-gray-800 rounded-xl text-white py-2 ">Check Out </button>
        </div>

      </div>
    </div>
  )
}
