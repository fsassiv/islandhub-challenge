import BuildingIcon from '@/public/icons/undraw_tailwind-css_ttun.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const PagePlaceholder = () => {
  const t_pages = useTranslations('pages');

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h4 className="mb-8 mt-8 text-foreground text-xl">
        {t_pages('work_in_progress')}
      </h4>
      <Image
        alt="building-page"
        width={100}
        height={100}
        src={BuildingIcon}
        className="w-1/2"
      />
    </div>
  );
};
