import { PopularColorsCard, VisionCard, XBudCard } from '../cards';

export const SideBar = () => {
  return (
    <aside className="flex flex-wrap flex-col w-full  gap-4 tablet:flex-row desktop:flex-col desktop:w-[25%] tablet:max-desktop:justify-between ">
      <div className="flex flex-col max-tablet:items-center w-full tablet:max-desktop:w-[40%] gap-4">
        <PopularColorsCard />

        <XBudCard />
      </div>
      <div className="tablet:max-desktop:w-[57%]">
        <VisionCard />
      </div>
    </aside>
  );
};
