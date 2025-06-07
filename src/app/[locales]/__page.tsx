import { Carousel } from '@/components/carousel/Carousel';

export default function Home() {
  return (
    <div className="grid grid-cols-7 grid-rows-12 desktop:grid-rows-8 gap-4 pt-4">
      <div className="col-span-full tablet:row-[1/6] desktop:col-[1/6] desktop:row-[1/6]">
        <Carousel />
      </div>
      <div className="col-span-full tablet:col-[1/5] tablet:row-[6/7] desktop:col-[1/3] desktop:row-[6/8] bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        voluptatem provident voluptas quam! Illum aut nesciunt reiciendis error
        dolores adipisci! Culpa doloribus ad nobis unde est temporibus tenetur
        fugiat cupiditate.
      </div>
      <div className="col-span-full tablet:col-[5/8] tablet:row-[6/7] desktop:col-[3/3] desktop:row-[6/8] bg-white">
        3
      </div>
      <div className="col-span-full tablet:row-[7/8] desktop:col-[4/6] desktop:row-[6/8] bg-white">
        4
      </div>
      <div className="col-span-full bg-white tablet:col-[1/5] tablet:row-[8/9] desktop:col-[6/8] desktop:row-[1/2]">
        5
      </div>
      <div className="col-span-full bg-white tablet:col-[1/5] tablet:row-[9/12] desktop:col-[6/8] desktop:row-[2/4]">
        6
      </div>
      <div className="col-span-full bg-white tablet:col-[5/8] tablet:row-[8/12] desktop:col-[6/8] desktop:row-[4/8]">
        7
      </div>
    </div>
  );
}
