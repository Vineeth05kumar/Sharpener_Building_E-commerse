import React, { useState, useEffect, createContext, useContext } from "react";
import AuthContext from "../Auth/auth-context"; // Import AuthContext

const CartContext = createContext({
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  totalAmount: 0,
  totalQuantity: 0,
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { email } = useContext(AuthContext); // Get the logged-in user's email

  // Format email to be used in URL
  const formattedEmail = email ? email.replace(/[@.]/g, '') : '';

  // Fetch cart data from the backend on component mount or email change
  useEffect(() => {
    if (formattedEmail) {
      fetch(`https://testtestapi.vercel.app/e675a4c1989b4c22932fede6dbfc9228/cart/${formattedEmail}`)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            setCart(data);
            calculateTotals(data);
          } else {
            console.error("Invalid cart data format:", data);
          }
        })
        .catch(error => console.error("Error fetching cart items:", error));
    }
  }, [formattedEmail]);

  const calculateTotals = (cartItems) => {
    let amount = 0;
    let quantity = 0;
    cartItems.forEach(item => {
      amount += item.price * item.quantity;
      quantity += item.quantity;
    });
    setTotalAmount(amount);
    setTotalQuantity(quantity);
  };

  const addProduct = (product) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      let updatedCart;

      if (existingItemIndex > -1) {
        // Update existing item
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + product.quantity,
        };
      } else {
        // Add new item
        updatedCart = [...prevCart, product];
      }

      calculateTotals(updatedCart);

      // Update backend
      if (formattedEmail) {
        fetch(`https://testtestapi.vercel.app/e675a4c1989b4c22932fede6dbfc9228/cart/${formattedEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCart),
        }).catch(error => console.error("Error updating cart:", error));
      }

      return updatedCart;
    });
  };

  const removeProduct = (id) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        const removedItem = updatedCart[existingItemIndex];
        
        if (removedItem.quantity > 1) {
          // Decrease quantity of existing item
          updatedCart[existingItemIndex] = {
            ...removedItem,
            quantity: removedItem.quantity - 1,
          };
        } else {
          // Remove item if quantity is 1
          updatedCart.splice(existingItemIndex, 1);
        }

        calculateTotals(updatedCart);

        // Update backend
        if (formattedEmail) {
          fetch(`https://testtestapi.vercel.app/e675a4c1989b4c22932fede6dbfc9228/cart/${formattedEmail}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCart),
          }).catch(error => console.error("Error updating cart:", error));
        }

        return updatedCart;
      }

      return prevCart;
    });
  };

  const cartContext = {
    cart: cart,
    addProduct: addProduct,
    removeProduct: removeProduct,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
