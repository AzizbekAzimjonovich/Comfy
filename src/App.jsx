import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import {
  About,
  HomeLayout,
  Error,
  Checkout,
  Cart,
  Orders,
  Products,
  Login,
  Landing,
  SingleProduct,
  Register,
} from "./pages";

// components
import { ErrorElement } from "./components";

// loaders
import { loader as LandingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductLoader } from "./pages/Products";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: LandingLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
          loader: ProductLoader,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
