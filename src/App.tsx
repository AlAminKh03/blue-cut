import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="flex justify-around mt-[2rem]">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "border-2 border-b-8 border-r-4 border-lime-500 p-2 rounded font-bold shadow-md transition-all duration-300 ease-in text-lime-500 "
              : " border-2 border-b-8 border-r-4 border-black p-2 rounded hover:border-lime-500  hover:font-bold hover:text-lime-500 "
          }
        >
          <h1>All orders</h1>
        </NavLink>
        <NavLink
          to="/regularDelivery"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "border-2 border-b-8 border-r-4 border-blue-500 p-2 rounded font-bold shadow-md transition-all duration-300 ease-in text-blue-500"
              : " border-2 border-b-8 border-r-4 border-black p-2 rounded hover:border-blue-500  ease-in hover:font-bold hover:text-blue-500 "
          }
        >
          <h1>Normal Delivery</h1>
        </NavLink>
        <NavLink
          to="/expressDelivery"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "border-2 border-b-8 border-r-4 border-green-500 p-2 rounded font-bold shadow-md transition-all duration-300 ease-in text-green-500 "
              : " border-2 border-b-8 border-r-4 border-black p-2 rounded hover:border-green-500  ease-in hover:font-bold hover:text-green-500 "
          }
        >
          <h1>Express Delivery</h1>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
