import { useState } from "react";
import { OrderProps } from "./AllOrder";
interface OrderTableProps {
  orderData: OrderProps[];
}

const OrderTable = ({ orderData }: OrderTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orderData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(orderData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <table className="min-w-full bg-white border border-gray-300 mx-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">SL</th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Delivery Type</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <th className="py-2 px-4 border-b text-center">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </th>
                <td className="py-2 px-4 border-b text-center">{item.id}</td>
                <td className="py-2 px-4 border-b text-center">{item.name}</td>
                <td className="py-2 px-4 border-b text-center">{item.price}</td>
                <td className="py-2 px-4 border-b text-center">{item.ref}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center my-10">
        {totalPages > 1 && (
          <div className="mt-4">
            {Array.from(Array(totalPages).keys()).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={`px-3 py-1 mx-1 rounded ${
                  pageNumber + 1 === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTable;
