import { toCurrency } from '@/utils/general';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';
import { ProductsItemPropTypes } from './types';

export const ProductsItem: FC<ProductsItemPropTypes> = ({ data }) => {
  const locale = useLocale();

  const t_products = useTranslations('products');

  return (
    <li className="relative rounded-3xl bg-white bg-opacity-60 p-4 mb-4 flex justify-between items-stretch text-foreground font-sans">
      <div className="flex flex-col">
        <h2 className="text-lg mb-4 font-bold text-gray-600">{data.name}</h2>
        <p className="mb-4 text-gray-600">{data.description}</p>

        <p className="text-sm font-bold text-gray-600">
          {toCurrency(data.price, locale)}
        </p>
      </div>

      <Link
        href={`products?category=${data.category}`}
        className="rounded-full py-1 px-4 text-xs absolute top-4 right-4 bg-slate-200 text-gray-400"
        style={{ textAlign: 'right' }}
      >
        {data.category}
      </Link>

      <Link
        href={`/products/${data.id}`}
        className="bg-[#E0FF76] rounded-full py-2 px-4 text-sm text-center absolute bottom-4 right-4 text-foreground"
        style={{ textAlign: 'center' }}
      >
        {t_products('more_details')}
      </Link>
    </li>
  );
};
