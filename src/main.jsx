import React from "react";
import ReactDOM from "react-dom/client";
import { routes } from "./router/router";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { ProductsContextProvider } from "./context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <RouterProvider router={routes} />
    </ProductsContextProvider>
  </React.StrictMode>
);
