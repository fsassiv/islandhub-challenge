'use client';
import { useCartCxt } from '@/context';
import { useTranslations } from 'next-intl';
import { CartItem } from '../cart_item';

export const CartList = () => {
  const { cart } = useCartCxt();

  const t_cart = useTranslations('cart');

  if (!cart.length)
    return (
      <h5 className="p-4 rounded-3xl bg-white bg-opacity-60">
        {t_cart('no_products')}
      </h5>
    );

  return (
    <ul className="mb-4">
      {cart.map((item, index) => (
        <CartItem key={item.id + index} data={item} />
      ))}
    </ul>
  );
};
