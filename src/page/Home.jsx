/** @format */

import React, { useContext, useState } from "react";
import Products from "../component/Products";
import { ShimmerPostList } from "react-shimmer-effects";
import { DataContext } from "../context/DataContext";
import Spinner from "../component/Spinner";
import Filter from "../component/Filter";
import Data from "../data";

export default function Home() {
  const { data, loading } = useContext(DataContext);
  const [category, setcategory] = useState(Data[0].title);
  function Filterhandler() {
    const filterdata = []
    if (category === "All") {
      data.map((dataa) => (filterdata.push(dataa)))
      return filterdata;
    }
    else {
      return data.filter((item) => item.category === category);
    }
  }
  return (
    <div className="mt-12 min-h-[80vh] flex flex-col justify-center items-center">
      {data.length > 0 && (
        <div>
          <Filter category={category} setcategory={setcategory} />
        </div>
      )}
      {
        loading ? (<ShimmerPostList postStyle="STYLE_FOUR" width={80} col={4} row={2} gap={30} />) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-5 xl:grid-cols-4  gap-7 xl:mx-auto max-w-[1080px]">
            {
              Filterhandler().map((post) => (
                <Products key={post.id} post={post} />
              ))
            }
          </div>
        )
      }
    </div>
  );
}
