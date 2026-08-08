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
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "./components/ui/provider";
import Layout from "./components/Layout";
import "./index.css";
import Products from "./Products";
import { CartProvider } from "./components/cart-context";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import Clients from "./Clients";
import Career from "./Career";

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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "career",
        element: <Career />,
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
    <HelmetProvider>
      <Provider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);

// https://bun.com/docs/bundler/hot-reloading#import-meta-hot-data
(import.meta.hot.data.root ??= createRoot(elem)).render(app);
