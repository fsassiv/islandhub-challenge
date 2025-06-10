'use client';
import { API_ROUTES } from '@/contants/api_routes';
import { ProductTypes } from '@/types';
import { handleHttpPromise } from '@/utils';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductsItem } from '../products_item';

export const ProductsList = () => {
  const searchParams = useSearchParams();
  const t_products = useTranslations('products');

  const [products, setProducts] = useState<ProductTypes[]>([]);

  const getProducts = async () => {
    const [error, data] = await handleHttpPromise<ProductTypes[]>(
      axios.get(`/${API_ROUTES.PRODUCTS}`),
    );

    if (error) {
      return [];
    }

    return data || [];
  };

  useEffect(() => {
    const filterByCategory = async () => {
      const category = searchParams.get('category');
      const data = await getProducts();

      if (category) {
        const temp = data.filter((item) => item.category === category);

        setProducts(temp);
        return;
      }

      setProducts(data);
    };

    filterByCategory();
  }, [searchParams]);

  return (
    <ul className="flex flex-col w-full">
      {!products.length ? (
        <h4 className="font-bold text-gray-600">{t_products('no_products')}</h4>
      ) : null}
      {products.map((item) => (
        <ProductsItem key={item.id} data={item} />
      ))}
    </ul>
  );
};
