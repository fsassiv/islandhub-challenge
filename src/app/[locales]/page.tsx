import { PopularColorsCard, VisionCard, XBudCard } from '@/components/cards';
import { Carousel } from '@/components/carousel';
import { SlideTypes } from '@/types/common';
import { handleHttpPromise } from '@/utils';
import axios from 'axios';

export default async function Home() {
  const [error, data] = await handleHttpPromise<{ slides: SlideTypes[] }>(
    axios.get(`${process.env.NEXTBASE_URL}/api/slides`),
  );

  return (
    <div className="flex flex-col gap-4 mt-4 desktop:flex-row">
      <main className="flex flex-col w-full gap-4 desktop:w-[75%]">
        <div className="max-tablet:h-[50vh]">
          {error ? null : <Carousel data={data?.slides} />}
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="tablet:w-[57%] desktop:w-[35%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore modi tempore id sequi asperiores tenetur, rem, doloremque ab
            possimus quam inventore vitae recusandae dolorem repellat sint
            quaerat sit in!
          </div>
          <div className="tablet:w-[40%] desktop:w-[20%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eaque placeat optio nam quia illum voluptatibus iure aliquam vel
            iusto pariatur, sequi ipsum tempore rem culpa quo corporis ea
            soluta?
          </div>
          <div className="tablet:w-full desktop:w-[40%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            aspernatur saepe praesentium earum, fugiat deleniti quam voluptatem
            illo soluta optio, ea ipsa maxime eveniet ut dolorum. Non
            repellendus reprehenderit magnam.
          </div>
        </div>
      </main>
      <aside className="flex flex-wrap flex-col w-full  gap-4 tablet:flex-row desktop:flex-col desktop:w-[25%] tablet:max-desktop:justify-between">
        <div className="flex flex-col w-full tablet:max-desktop:w-[40%] gap-4">
          <PopularColorsCard />

          <XBudCard />
        </div>
        <div className="tablet:max-desktop:w-[57%]">
          <VisionCard />
        </div>
      </aside>
    </div>
  );
}
