import { InforCard, MoreProductsCard } from '@/components/cards';
import { Carousel } from '@/components/carousel';
import { DataResponseTypes } from '@/types/common';
import { handleHttpPromise } from '@/utils';
import axios from 'axios';

export default async function Home() {
  const [error, data] = await handleHttpPromise<DataResponseTypes>(
    axios.get(`${process.env.NEXTBASE_URL}/api/slides`),
  );

  return (
    <main className="flex flex-col w-full gap-4 desktop:w-[75%] desktop:justify-between">
      <div className="max-tablet:h-[50vh] desktop:h-[55vh]">
        {error ? null : <Carousel data={data?.slides || []} />}
      </div>
      <div className="flex flex-wrap gap-4 justify-center tablet:justify-between">
        <div className="w-full tablet:w-[57%] desktop:w-[35%]">
          <MoreProductsCard products={data?.products.slice(0, 3) || []} />
        </div>
        <div className="w-1/2 tablet:w-[40%] desktop:w-[20%]">
          <InforCard reviews_count={data?.reviews_count || 0} />
        </div>
        <div className="tablet:w-full desktop:w-[40%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          aspernatur saepe praesentium earum, fugiat deleniti quam voluptatem
          illo soluta optio, ea ipsa maxime eveniet ut dolorum. Non repellendus
          reprehenderit magnam.
        </div>
      </div>
    </main>
  );
}
