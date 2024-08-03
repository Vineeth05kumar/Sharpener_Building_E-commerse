import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import { CartProvider } from "./components/Auth/cart-auth";
import { AuthProvider } from './components/Auth/auth-context';
import PrivateRoute from "./components/PrivateRoute";

// Lazy load components
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const ContactUs = lazy(() => import("./components/pages/ContactUs"));
const Login = lazy(() => import("./components/pages/Login"));
const Products = lazy(() => import("./components/store/Products"));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<PrivateRoute element={Products} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/auth" element={<Login />} />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
