import { Card } from "@nextui-org/react";

import { Link, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
// import PopularBaskets from "./components/PopularBaskets";

import All_Awail_Basket from "./components/All_Awail_Basket";
import PopularBasket from "./components/Popular_Basket";
import PopularBaskets from "./components/PopularBaskets";
import BasketDetils from "./components/BasketDetils";

import Basket from "./components/Basket";
import Test_Basket from "./components/Test_Basket";

const App = () => {
  const list = [
    {
      title: "Tata",
      img: "https://animationvisarts.com/wp-content/uploads/2016/10/tata-logo-design.jpg",
      price: "$5.50",
    },
    {
      title: "SBI",
      img: "https://animationvisarts.com/wp-content/uploads/2016/10/sbi-logo-design.jpg",
      price: "$3.00",
    },
    {
      title: "HDFC",
      img: "https://animationvisarts.com/wp-content/uploads/2016/10/hdfc-bank-logo-design.jpg",
      price: "$10.00",
    },
    {
      title: "Airtel",
      img: "https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
  ];

  return (
    <>
      <DashBoard />
      <div className="flex justify-center mt-5">
        <div className="px-4 lg:px-0 w-30 lg:w-auto">
          <Basket />
        </div>
      </div>
      <PopularBaskets />

      <Routes>
        <Route path="/" element={<All_Awail_Basket list={list} />} />
        <Route path="/:id" element={<BasketDetils />} />
      </Routes>

      {/* <BasketDetils /> */}

      {/* <Test_Basket /> */}
    </>
  );
};

export default App;
