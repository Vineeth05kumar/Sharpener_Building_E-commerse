import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Components/Store";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import RootLayout from "./Components/Pages/Root";
import CartProvider from "./Components/Context/CartProvider";
import Erroe from "./Components/Pages/Erroe";
// import Header from "./Components/Pages/Header";
// import Footer from "./Components/Pages/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Erroe />,
    children: [
      { path: "store", element: <Store /> },
      { path: "about", element: <About /> },
      { path: "home", element: <Home /> },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      {/* <Header /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </CartProvider>
  );
};

export default App;
