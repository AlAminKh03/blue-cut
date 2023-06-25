import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { GlassesProps } from "../Delivery/RegularDelivery";
import { useState } from "react";
interface GlassProps {
  GlassData: GlassesProps;
}

const SingleCardEx = ({ GlassData }: GlassProps) => {
  const MySwal = withReactContent(Swal);

  const handleOrder = () => {
    const existingData = localStorage.getItem("orderData");
    const previousItems = existingData ? JSON.parse(existingData) : [];
    const glassesData = {
      id: GlassData.id,
      name: GlassData.name,
      price: GlassData.price,
      ref: "express",
    };

    MySwal.fire({
      title: "Confirm your order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Your order is placed", "success");
        const updatedItems = Array.isArray(previousItems)
          ? [...previousItems, glassesData]
          : [glassesData];
        localStorage.setItem("orderData", JSON.stringify(updatedItems));
      } else {
        MySwal.fire("Your order is cancelled");
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full border-[1px]  p-8 rounded-md shadow-lg shadow-gray-300">
      <div className="flex-shrink-0 h-64 w-64">
        <img
          src={GlassData.photoUrl}
          alt={GlassData.name}
          className="object-contain h-full w-full"
        />
      </div>
      <h1 className="text-xl font-bold mt-2">{GlassData.name}</h1>
      <p>{GlassData.color}</p>
      <button
        onClick={handleOrder}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-all ease-in duration-300"
      >
        Order
      </button>
    </div>
  );
};

export default SingleCardEx;
