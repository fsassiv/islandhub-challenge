'use client';
import { useCartCxt } from '@/context';
import { CartItem } from '../cart_item';

export const CartList = () => {
  const { cart } = useCartCxt();

  if (!cart.length) return <h5>No items in the cart yet...</h5>;

  return (
    <ul className="mb-4">
      {cart.map((item, index) => (
        <CartItem key={item.id + index} data={item} />
      ))}
    </ul>
  );
};
