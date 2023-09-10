import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Diablo from "./components/diablo/Diablo.jsx";
import Shop from "./components/shop/Shop.jsx";
import Cart from "./components/shop/Cart.jsx";
import NotFound from "./components/notFound/NotFound.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { getTotal } from "./store/cartSlice.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "diablo",
          element: <Diablo />,
        },
        {
          path: "shop",
          children: [
            {
              index: true,
              element: <Shop />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.DEV ? "/" : "/final/",
  }
);

store.dispatch(getTotal());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
