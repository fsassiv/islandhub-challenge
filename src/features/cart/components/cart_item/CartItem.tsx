'use client';
import { useCartCxt } from '@/context';
import TrashIcon from '@/public/icons/trash-svgrepo-com.svg';
import { toCurrency } from '@/utils/general';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import { CartItemPropTypes } from './types';

export const CartItem: FC<CartItemPropTypes> = ({ data }) => {
  const { removeFromCart } = useCartCxt();
  const locale = useLocale();

  const t_cart = useTranslations('cart');

  return (
    <li className="rounded-3xl bg-white bg-opacity-60 p-4 mb-4 flex justify-between">
      <div className="w-full">
        <h4 className="font-bold">{`${t_cart('name')}: ${data.name}`}</h4>
        <p className="mb-1">{`${t_cart('description')}: ${data.description}`}</p>
        <p className="mb-1">{`${t_cart('cart_qty')}: ${data.qty}`}</p>
        <p className="mb-1 font-bold">{`${t_cart('amount')}: ${toCurrency(data.qty * data.price, locale)}`}</p>
      </div>
      <div className="flex flex-col justify-between">
        <button
          id="remove-from-cart-btn"
          onClick={() => removeFromCart(data.id)}
        >
          <Image alt="trash-icon" height={20} width={20} src={TrashIcon} />
        </button>
      </div>
    </li>
  );
};
