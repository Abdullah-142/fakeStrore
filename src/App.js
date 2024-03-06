import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";

export default function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      
        

        <Route path="/Cart" element={<Cart />} />
      </Routes>


    </>
  );
}
