/** @format */

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const url = ('https://dummyjson.com/products')
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([])
  const [cart, setcart] = useState([]);
    
  async function getdata() {
    try {
      setloading(true);
      const res = await fetch(url);
      const jsonData = await res.json();
      setdata(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setloading(false);
    }
  }
  

  useEffect(() => {
    getdata();
  }, []);
  const value = {
    data,
    setdata,
    loading,
    setloading,
    cart, setcart
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
