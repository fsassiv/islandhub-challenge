import { API_ROUTES } from '@/contants/api_routes';
import { ProductsCard } from '@/features/products/components/products_card';
import { ProductTypes } from '@/types';
import { handleHttpPromise } from '@/utils';
import axios from 'axios';
import { notFound } from 'next/navigation';

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [error, data] = await handleHttpPromise<ProductTypes>(
    axios.get(`${process.env.NEXTBASE_URL}/${API_ROUTES.PRODUCTS}/${id}`),
  );

  if (data) return <ProductsCard data={data} />;

  if (error || !data) notFound();
}
