import All_Awail_Basket from "./All_Awail_Basket";
import Basket from "./Basket";
import Mpopular_Basket from "./Mpopular_Basket";

// import PopularBaskets from "./PopularBaskets";

function DashBoard() {
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
      <div className="flex flex-col min-h-30">
        {/* User Profile Details here */}
        <div className="bg-white mt-3  p-4">
          <h1 className="text-lg font-semibold">Hey Olivia !</h1>
          <p className="text-sm text-gray-500 mt-1">Your portfolio of today:</p>
          <div className="flex items-baseline mt-3">
            <h2 className="text-3xl font-bold"> ₹ 23,03.00</h2>

            <span className=" px-4 py-1 rounded-md  bg-zinc-100  ml-2 text-sm font-semibold text-green-500">
              +13%
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            You're 13% better than the market today! Congrats!
          </p>

          <div className="px-5 py-5 flex mt-5 bg-zinc-200 rounded-md border border-blue-500">
            <div className="flex flex-grow ">
              <span className="font-bold flex-1">Overall investment:</span>
              <h1 className="text-1xl flex-1"> ₹ 50000</h1>
            </div>
          </div>
        </div>
      </div>
      <Basket />
      {/* <PopularBaskets /> */}
      <Mpopular_Basket />
      <All_Awail_Basket list={list} />
    </>
  );
}

export default DashBoard;
