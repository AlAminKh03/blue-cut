import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegularDelivery from "./Components/Delivery/RegularDelivery.tsx";
import ExpressDelivery from "./Components/Delivery/ExpressDelivery.tsx";
import AllOrder from "./Components/AllOrders/AllOrder.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllOrder />,
      },
      {
        path: "regularDelivery",
        element: <RegularDelivery />,
      },
      {
        path: "expressDelivery",
        element: <ExpressDelivery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
