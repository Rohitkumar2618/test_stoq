import { Card } from "@nextui-org/react";

import { Link, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
// import PopularBaskets from "./components/PopularBaskets";

import All_Awail_Basket from "./components/All_Awail_Basket";

import BasketDetils from "./components/BasketDetils";

import Basket from "./components/Basket";
import Test_Basket from "./components/Test_Basket";

const App = () => {
  return (
    <>
      <Routes>
        {/* i want to show most of the component on the home page so i add all component on DashBoard component  then its route on home component  */}
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/:id" element={<BasketDetils />} />
      </Routes>

      {/* <BasketDetils /> */}

      {/* <Test_Basket /> */}
    </>
  );
};

export default App;
