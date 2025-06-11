import { ProductTypes } from '@/types';

export type CartProductTypes = ProductTypes & {
  qty: number;
};

export type CartContextTypes = {
  cart: CartProductTypes[];
  addToCart: (data: ProductTypes) => void;
  cartQty: number;
  cartAmount: number;
  removeFromCart: (id: string) => void;
};
