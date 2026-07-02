/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "./components/ui/provider";
import Layout from "./components/Layout";
import "./index.css";
import Products from "./Products";
import { CartProvider } from "./components/cart-context";
import Cart from "./Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "product",
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <Provider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </StrictMode>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
