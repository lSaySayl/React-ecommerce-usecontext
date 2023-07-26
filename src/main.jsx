
import ReactDOM from "react-dom/client";
import { routes } from "./router/router";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { ProductsContextProvider } from "./context/ProductsContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <ShoppingCartContextProvider>
      <ProductsContextProvider>
        <RouterProvider router={routes} />
      </ProductsContextProvider>
    </ShoppingCartContextProvider>

);
