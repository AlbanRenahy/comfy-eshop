import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
//albanrenahy.eu.auth0.com
//DjdWe5vtdQ2onmemyYNZLpCteKq4VmnG

ReactDOM.render(
  <Auth0Provider
    domain="albanrenahy.eu.auth0.com"
    clientId="DjdWe5vtdQ2onmemyYNZLpCteKq4VmnG"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
