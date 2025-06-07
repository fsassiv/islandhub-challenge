import { Carousel } from '@/components/carousel/Carousel';
import { SlideTypes } from '@/types/common';
import { handleHttpPromise } from '@/utils';
import axios from 'axios';

export default async function Home() {
  const [error, data] = await handleHttpPromise<{ slides: SlideTypes[] }>(
    axios.get('http://localhost:3000/api/slides'),
  );

  return (
    <div className="flex flex-col gap-4 mt-4 desktop:flex-row">
      <div className="flex flex-col w-full gap-4 desktop:w-[70%]">
        <div className="max-tablet:h-[50vh]">
          {error ? null : <Carousel data={data?.slides} />}
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="tablet:w-[57%] desktop:w-[35%] bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatem provident voluptas quam! Illum aut nesciunt reiciendis
            error dolores adipisci! Culpa doloribus ad nobis unde est temporibus
            tenetur fugiat cupiditate.
          </div>
          <div className="tablet:w-[40%] desktop:w-[20%] bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eaque placeat optio nam quia illum voluptatibus iure aliquam vel
            iusto pariatur, sequi ipsum tempore rem culpa quo corporis ea
            soluta?
          </div>
          <div className="tablet:w-full desktop:w-[40%] bg-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            aspernatur saepe praesentium earum, fugiat deleniti quam voluptatem
            illo soluta optio, ea ipsa maxime eveniet ut dolorum. Non
            repellendus reprehenderit magnam.
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-col w-full  gap-4 tablet:flex-row desktop:flex-col desktop:w-[30%] tablet:max-desktop:justify-between">
        <div className="flex flex-col w-full tablet:max-desktop:w-[40%] gap-4">
          <div className="bg-white">5</div>
          <div className="bg-white">6</div>
        </div>
        <div className="bg-white tablet:max-desktop:w-[57%]">7</div>
      </div>
    </div>
  );
}
