import Basket from "./Basket";

function DashBoard() {
  return (
    <div className="flex flex-col min-h-30">
      {/* User Profile Details here */}
      <div className="bg-white mt-3  p-4">
        <h1 className="text-lg font-semibold">Hey Olivia!</h1>
        <p className="text-sm text-gray-500 mt-1">Your portfolio of today:</p>
        <div className="flex items-baseline mt-3">
          <h2 className="text-3xl font-bold">$23,03.00</h2>

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
            <h1 className="text-1xl flex-1">$ 50000</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
