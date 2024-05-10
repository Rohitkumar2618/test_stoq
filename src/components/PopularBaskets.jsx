import React from "react";
import Popular_Basket from "./Popular_Basket";

function PopularBaskets() {
  return (
    <div
      className="  flex-col
      overflow-hidden
      overflow-y-scroll 
    
    justify-center items-center md:w-full mt-3  p-5"
    >
      <h1 className=" text-2xl font-semibold ">Most Popular Basket</h1>

      <div className="flex gap-2 overflow-x-auto ">
        <div className="flex-shrink-0 ">
          <Popular_Basket />
        </div>
      </div>
    </div>
  );
}

export default PopularBaskets;
