import { useState, useEffect } from "react";
import OrderTable from "./OrderTable";

export interface OrderProps {
  id: number;
  name: string;
  price: string;
  ref: string;
}

const AllOrder = () => {
  const [orderData, setOrderData] = useState<OrderProps[]>([]);

  useEffect(() => {
    const existingData = localStorage.getItem("orderData");
    if (existingData) {
      const parsedData = JSON.parse(existingData);
      setOrderData(parsedData);
    }
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-3">
        {/* <div className="border-2 border-b-8 border-r-4 border-lime-500 rounded-md"> */}
        {/* <h1>The thing you will see in this page</h1>
          <ul> 
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        {/* </div> */}
        <div></div>
        <div></div>
      </div>
      <div className=" mt-10">
        <h1 className="text-center m-8 font-bold text-2xl">Your Orders</h1>
        {orderData.length > 0 ? (
          <div>
            <OrderTable orderData={orderData} />
          </div>
        ) : (
          <p>You don't have any orders</p>
        )}
      </div>
    </div>
  );
};

export default AllOrder;
