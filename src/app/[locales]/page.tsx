import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('general.greeting');

  return (
    <div className="grid grid-cols-7 grid-rows-8 gap-4 pt-4">
      <div className="col-span-full desktop:col-[1/6] desktop:row-[1/6] bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        eveniet, aliquid necessitatibus quibusdam magnam, inventore cupiditate
        quaerat tempora vel sapiente tenetur voluptates numquam explicabo. Natus
        temporibus quis quibusdam similique accusamus?
      </div>
      <div className="col-span-full tablet:col-[1/5] desktop:col-[1/3] desktop:row-[6/8] bg-white">
        2
      </div>
      <div className="col-span-full tablet:col-[5/8] desktop:col-[3/3] desktop:row-[6/8] bg-white">
        3
      </div>
      <div className="col-span-full desktop:col-[4/6] desktop:row-[6/8] bg-white">
        4
      </div>
      <div className="col-span-full bg-white tablet:col-[1/5] tablet:row-[4/5] desktop:col-[6/8] desktop:row-[1/2]">
        5
      </div>
      <div className="col-span-full bg-white tablet:col-[1/5] tablet:row-[5/8] desktop:col-[6/8] desktop:row-[2/4]">
        6
      </div>
      <div className="col-span-full bg-white tablet:col-[5/8] tablet:row-[4/8] desktop:col-[6/8] desktop:row-[4/8]">
        7
      </div>
    </div>
  );
}
