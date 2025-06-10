import { toCurrency } from '@/utils/general';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';
import { ProductsCardPropTypes } from './types';

export const ProductsCard: FC<ProductsCardPropTypes> = ({ data }) => {
  const locale = useLocale();
  const t_products = useTranslations('products');

  return (
    <div className="rounded-3xl bg-white bg-opacity-60 p-8 relative">
      <Link
        href={`/products?category=${data.category}`}
        className="rounded-full py-1 px-4 text-xs absolute top-8 right-8 bg-slate-200 text-gray-400"
        style={{ textAlign: 'right' }}
      >
        {data.category}
      </Link>

      <h2 className="text-xl mb-4 font-bold text-gray-600">{data.name}</h2>
      <p>{data.description}</p>
      <div className="flex justify-between items-end">
        <div className="flex items-center">
          <span className="text-lg font-bold mr-1">
            {toCurrency(data.price, locale)}
          </span>
          <span className="text-sm text-gray-400">
            {data.stock ? t_products('available') : t_products('out_of_stock')}
          </span>
        </div>
        <button
          id="add-to-cart-btn"
          className={`rounded-full text-white bg-black py-4 px-6 ${!data.stock ? 'bg-opacity-25' : ''}`}
          disabled={!data.stock}
        >
          {t_products('add_to_cart')}
        </button>
      </div>
    </div>
  );
};
