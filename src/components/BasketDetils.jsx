import React from "react";

function BasketDetils() {
  const products = [
    { name: "Product 1", weight: "$123" },
    { name: "Product 2", weight: "$456" },
    { name: "Product 3", weight: "$789" },
    { name: "Product 4", weight: "$234" },
    { name: "Product 5", weight: "$567" },
    { name: "Product 6", weight: "$890" },
    { name: "Product 7", weight: "$123" },
    { name: "Product 8", weight: "$456" },
    { name: "Product 9", weight: "$789" },
    { name: "Product 10", weight: "$234" },
    { name: "Product 11", weight: "$567" },
    { name: "Product 12", weight: "$890" },
  ];

  const data = [
    { title: "Annual Return", percent: "54%" },
    { title: "3 year CAGR ", percent: "54%" },
    { title: "Succesfull Rate ", percent: "51%" },
    { title: "Annual C", percent: "58%" },
  ];

  return (
    <>
      <div className="p-10 font-bold text-2xl">
        <h1 className="text-3xl">Banking</h1>
      </div>

      {/* $ Boxes Code */}
      <div className="p-3 flex flex-wrap gap-5 items-center justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-32 h-32 flex flex-col items-center justify-center bg-zinc-300 rounded-md"
          >
            <h1>{item.title}</h1>
            <h1>{item.percent}</h1>
          </div>
        ))}
      </div>
      {/* Why we want to invest wala code */}
      <div className="p-3">
        <h3 className=" font-semibold mb-3">Why to invest in this basket</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          minus quis itaque, atque expedita nulla sapiente provident cumque
          quasi? Nisi nihil possimus atque rem suscipit praesentium voluptatum
          adipisci qui quo?
        </p>
      </div>

      {/* Stocks and weight Code  */}
      <div>
        <span className="font-semibold p- text-2xl">
          <h3 className="p-3">Stocks & Weights</h3>
        </span>
        <div>
          <div className="flex justify-center items-center p-3 text-red-400 gap-40">
            <h3>Stock</h3>
            <h3>Weight</h3>
          </div>
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "200px" }} // Adjust the max-height as per your requirement
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex justify-center items-center mt-5 gap-40"
              >
                <h3>{product.name}</h3>
                <h3>{product.weight}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About the manager code */}

      <div className="mt-32 p-3  ">
        <span>
          <h1 className="mb-3 text-xl font-bold "> About the Manager </h1>
        </span>

        <div className="bg-zinc-300 rounded-lg shadow-md overflow-hidden p-3">
          <div className="p-4">
            <h2 className="text-xl font-bold">Centrum</h2>
            <p className="text-gray-700 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              earum illum qui et dolorum dignissimos reprehenderit distinctio,
              ratione exercitationem est!
            </p>
            <div className="flex items-center mt-4">
              <p className="text-gray-500 mr-2">Manages smallcases</p>
              <p className="text-blue-500">Manages smallcases</p>
            </div>
            <div className="flex items-center mt-2">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              <p className="text-gray-500">Thematic</p>
            </div>
            <div className="flex items-center mt-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <p className="text-gray-500">Growth</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">+ 6 more strategies</p>
            </div>
            <div className="mt-6  flex gap-20 ">
              <a className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View manager details &gt;
              </a>

              <a className="text-sm font-medium text-zinc-800 ">Disclosures</a>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-3">
          <div className="flex items-center">
            <h1 className="font-bold mr-2">Basket Multiple :</h1>
            <input
              type="text"
              className="border-2 border-red-500 px-2 py-1 rounded-md"
              placeholder="Enter multiple of Basket"
            />
          </div>

          <button className=" px-2 py-1 rounded-md text-white font-bold text-1xl bg-blue-700">
            Invest Now
          </button>
        </div>
      </div>
    </>
  );
}

export default BasketDetils;
