'use client';
import { ProductTypes } from '@/types';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CartContextTypes, CartProductTypes } from './types';

const CartContext = createContext<CartContextTypes>({
  addToCart: () => {},
  cart: [],
  cartQty: 0,
  cartAmount: 0,
  removeFromCart: () => {},
});

export const useCartCxt = () => useContext(CartContext);

export const CartContextWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartProductTypes[]>([]);
  const [cartQty, setCartQty] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

  const addToCart = (data: ProductTypes) => {
    const filtered = cart.filter((item) => item.id !== data.id);
    let addedItem: CartProductTypes | undefined = cart.find(
      (item) => item.id === data.id,
    );

    if (addedItem) {
      addedItem.qty += 1;
    }
    if (!addedItem) {
      addedItem = { ...data, qty: 1 };
    }

    setCart([...filtered, addedItem]);
  };

  const removeFromCart = (id: string) => {
    const filtered = cart.filter((item) => item.id !== id);

    setCart(filtered);
  };

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.qty, 0);
    const amount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    setCartAmount(amount);
    setCartQty(sum);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ addToCart, cart, cartQty, cartAmount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
