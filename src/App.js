import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Components/Store";
import About from "./Components/Pages/About";
import Products from "./Components/Pages/Products";
import RootLayout from "./Components/Pages/Root";
import CartProvider from "./Components/Context/CartProvider";
import Erroe from "./Components/Pages/Erroe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<Erroe />,
    children: [
      { path: "store", element: <Store /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
