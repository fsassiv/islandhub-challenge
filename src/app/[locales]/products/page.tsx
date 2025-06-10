import { Loading } from '@/components/loading';
import dynamic from 'next/dynamic';

const ProductsList = dynamic(
  () =>
    import('@/features/products/components/products_list').then(
      (mod) => mod.ProductsList,
    ),
  {
    ssr: false,
    loading: () => <Loading />,
  },
);

export default async function Products() {
  return <ProductsList />;
}
