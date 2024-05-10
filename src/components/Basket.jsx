import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";

function Basket() {
  // State to store fetched basket data
  const [baskets, setBaskets] = useState([]);

  // Fetch basket data from the API
  useEffect(() => {
    fetch("https://centrum-backend.vercel.app/basket_example")
      .then((response) => response.json())
      .then((data) => {
        setBaskets(data);
      })
      .catch((error) => console.error("Error fetching baskets:", error));
  }, []);

  return (
    <>
      <h1 className="font-semibold mb-3">Your Baskets</h1>
      <div className="overflow-y-scroll max-h-[400px]">
        <div className="grid grid-cols-1 gap-4">
          {baskets.map((basket) => (
            <div
              key={basket.id}
              className="flex items-center justify-between w-full gap-4 p-4 rounded-md 
                overflow-hidden
                hover:shadow-lg transition duration-300 bg-[#F0F4FE] mb-3"
              style={{ width: "100%", maxWidth: "400px" }} // Set max width for responsiveness
            >
              <div>
                <IoMdCheckboxOutline className="text-3xl" />
              </div>
              <div style={{ flex: "1" }}>
                {" "}
                {/* Allow description to truncate */}
                <h1 className="text-black font-semibold text-lg mb-2">
                  {basket.name}
                </h1>
                <p className="text-black text-sm line-clamp-3">
                  {basket.description}
                </p>
              </div>
              <div>
                <FaArrowRight className=" px-1 bg-white text-black text-2xl hover:text-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Basket;
