import React from 'react'
import Data from '../data'
export default function Filter({ category,setcategory }) {


  
    
  return (
    <div className='flex gap-4 pb-7 flex-wrap  justify-center'>

      {
        
        Data.map((data) => (
          <button key={data.id} onClick={() => setcategory(data.title)} className={
            ` text-white bg-gray-800 py-1  px-3 transition-all border-2 duration-300 rounded-md
          ${category === data.title ? "bg-gray-600 " : ""}`}>{data.title}</button>
        ))
        
      }
    </div>
  )
}
