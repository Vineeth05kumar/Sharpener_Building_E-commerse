import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/store/Products";
import Header from "./components/UI/Header";
import { CartProvider } from "./components/Auth/cart-auth";
import { AuthContextProvider } from './components/Auth/auth-context';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<PrivateRoute element={Products} />} />
            <Route path="/store" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/auth" element={<Login />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
