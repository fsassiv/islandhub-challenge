'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import BackIcon from '@/public/icons/chevron-left-svgrepo-com.svg';
import RightIcon from '@/public/icons/chevron-right-svgrepo-com.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FC, useCallback } from 'react';
import { CarouselFooter } from './CarouselFooter';
import { CarouselHeader } from './CarouselHeader';
import { CarouselSlide } from './CarouselSlide';
import { CarouselPropTypes } from './types';

export const Carousel: FC<CarouselPropTypes> = ({ data }) => {
  const t_general = useTranslations('general');

  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

  const getNaturalSlideHeight = useCallback((): number => {
    if (isMobile) return 100;
    if (isTablet) return 75;
    return 50;
  }, [isMobile, isTablet]);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={getNaturalSlideHeight()}
      totalSlides={data?.length || 0}
      infinite={true}
      isPlaying={true}
      className="relative h-full"
    >
      <Slider className="rounded-3xl h-full shadow-xs shadow-black-100">
        {data?.map((item) => (
          <CarouselSlide key={item.id} index={item.index} data={item} />
        ))}
      </Slider>
      <div className="absolute w-full tablet:w-[50px] tablet:bg-white rounded-full p-3 right-[50%] translate-x-[50%] bottom-16 tablet:right-[20%] tablet:bottom-8 tablet:aspect-square flex justify-center items-center max-tablet:flex max-tablet:justify-between">
        <ButtonBack id="carousel-back-btn">
          <Image alt="back" width={10} height={10} src={BackIcon} />
        </ButtonBack>
        <ButtonNext id="carousel-next-btn">
          <Image alt="back" width={10} height={10} src={RightIcon} />
        </ButtonNext>
      </div>
      <CarouselHeader label={t_general('carousel.music_is_classic')} />
      <CarouselFooter label={t_general('carousel.follow_us_on')} />
    </CarouselProvider>
  );
};
