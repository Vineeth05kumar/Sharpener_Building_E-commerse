import { useState, createContext} from "react";

// Create CartContext with default values
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

  // Function to add a product to the cart
  const addProduct = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingItemIndex > -1) {
        // Update quantity of the existing item
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + product.quantity,
        };
      } else {
        // Add new product
        updatedCart = [...prevCart, product];
      }

      return updatedCart;
    });

    // Update total amount and quantity
    setTotalAmount((prevTotalAmount) => prevTotalAmount + product.price * product.quantity);
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + product.quantity);
  };

  // Function to remove a product from the cart
  const removeProduct = (id) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        const removedItem = updatedCart[existingItemIndex];
        
        // Remove or decrease quantity of the item
        if (removedItem.quantity > 1) {
          updatedCart[existingItemIndex] = {
            ...removedItem,
            quantity: removedItem.quantity - 1,
          };
        } else {
          updatedCart.splice(existingItemIndex, 1); // Remove item if quantity is 1
        }

        setTotalAmount((prevTotalAmount) => prevTotalAmount - removedItem.price);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);

        return updatedCart;
      }

      return prevCart;
    });
  };

  // Context value to be provided
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
