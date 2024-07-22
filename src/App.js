import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Components/Store";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import RootLayout from "./Components/Pages/Root";
import CartProvider from "./Components/Context/CartProvider";
import Erroe from "./Components/Pages/Erroe";
import ContactUs from "./Components/Pages/ContactUs"; 
import './App.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Erroe />,
    children: [
      { path: "store", element: <Store /> },
      { path: "about", element: <About /> },
      { path: "home", element: <Home /> },
      {path:"contact_us",element:<ContactUs />}
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
