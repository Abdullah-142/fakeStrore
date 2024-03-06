/** @format */
import { NavLink, useLocation } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function Navbar() {
  const location = useLocation();
  const { cart } = useContext(DataContext);
  return (
    <div className=" bg-gray-200 p-4">
      <nav className=" flex justify-between items-center mx-auto max-w-[900px]">
        <div>
          <NavLink to="/">
            <img
              src="data:image/png;base64,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"
              className="h-12"
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex gap-x-4 items-center">
          <p
            className={`text-2xl hover:text-slate-400 transition-all duration-200 ${location.pathname === "/" ? " text-slate-500" : "text-black"
              }`}
          >
            <NavLink to="/">Home</NavLink>
          </p>
          <p
            className={`text-2xl relative hover:text-slate-400 transition-all duration-200 ${location.pathname === "/Cart" ? " text-slate-500" : "text-black"
              }`}>
            <NavLink to="/Cart">
              <div className=" relative">
                <ShoppingCart size={30} />
                {
                  
                  cart.length > 0 &&
                  <span className="w-5 h-5 flex justify-center items-center text-sm -top-2 absolute -right-1 bg-yellow-500 rounded-full text-white transition animate-bounce  duration-100"> {cart.length}</span>
                }
              </div>
            </NavLink>

          </p>
        </div>
      </nav>
    </div>
  );
}
