import ArrowUpRightIcon from '@/public/icons/arrow-up-right-svgrepo-com.svg';
import VisionImage from '@/public/images/lady-okulos.png';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { BaseCard } from './BaseCard';

export const VisionCard = () => {
  const t_cards = useTranslations('cards');

  return (
    <BaseCard>
      <div
        className="flex flex-col justify-end h-[400px] w-full p-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, #E1EBEC, #ffffff `,
        }}
      >
        <h4 className="mb-1 w-2/3 font-bold">{t_cards('vision.title')}</h4>
        <p className="font-light text-xs">{t_cards('vision.subtitle')}</p>
        <Image
          alt="vision"
          width={100}
          height={100}
          src={VisionImage}
          className="absolute bottom-[20%] right-0 h-auto w-3/4 tablet:max-w-[260px]"
        />
        <Link
          id="x-bud-card-link-btn"
          className="rounded-full bg-white w-[40px] h-[40px] flex justify-center items-center absolute top-4 right-4"
          href="/products/vision"
        >
          <Image
            alt="arrow-up-right"
            width={30}
            height={30}
            src={ArrowUpRightIcon}
          />
        </Link>
      </div>
    </BaseCard>
  );
};
