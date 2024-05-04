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
  SingleRroduct,
  Register,
} from "./pages";
import { ErrorElement } from "./components";
import { loader as LandingLoader } from "./pages/Landing";

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
        },
        {
          path: "/product/:id",
          element: <SingleRroduct />,
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
