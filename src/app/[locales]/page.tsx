import { InforCard, MoreProductsCard, PopularCard } from '@/components/cards';
import { Carousel } from '@/components/carousel';
import { API_ROUTES } from '@/contants/api_routes';
import { ProductTypes, SlideTypes } from '@/types/common';
import { handleHttpPromise } from '@/utils';
import axios from 'axios';
import { notFound } from 'next/navigation';

export default async function Home() {
  const [errorSlides, slides] = await handleHttpPromise<SlideTypes[]>(
    axios.get(`${process.env.NEXTBASE_URL}/${API_ROUTES.SLIDES}`),
  );

  const [errorProducts, products] = await handleHttpPromise<ProductTypes[]>(
    axios.get(`${process.env.NEXTBASE_URL}/${API_ROUTES.PRODUCTS}`),
  );

  const [errorReviews, reviews_count] = await handleHttpPromise<number>(
    axios.get(`${process.env.NEXTBASE_URL}/${API_ROUTES.REVIEWS}`),
  );

  const [errorRatings, popular_ratins] = await handleHttpPromise<number>(
    axios.get(`${process.env.NEXTBASE_URL}/${API_ROUTES.RATINGS}`),
  );

  if (errorSlides || errorProducts || errorReviews || errorRatings) notFound();

  return (
    <main className="flex flex-col w-full gap-4 desktop:w-[75%] desktop:justify-between">
      <div className="max-tablet:h-[50vh] desktop:h-[55vh]">
        {errorSlides ? null : <Carousel data={slides || []} />}
      </div>
      <div className="flex flex-wrap gap-4 justify-center tablet:justify-between">
        <div className="w-full tablet:w-[57%] desktop:w-[35%]">
          <MoreProductsCard products={products.slice(0, 3) || []} />
        </div>
        <div className="w-1/2 tablet:w-[40%] desktop:w-[20%]">
          <InforCard reviews_count={reviews_count || 0} />
        </div>
        <div className="w-full desktop:w-[40%]">
          <PopularCard popular_ratins={popular_ratins || 0} />
        </div>
      </div>
    </main>
  );
}
