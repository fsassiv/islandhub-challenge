'use client';
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
import { CarouselFooter } from './CarouselFooter';
import { CarouselHeader } from './CarouselHeader';
import { CarouselSlide } from './CarouselSlide';

export const Carousel = () => {
  const t_general = useTranslations('general');

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}
      infinite={true}
      // isPlaying={true}
      className="relative h-full"
    >
      <Slider className="rounded-3xl overflow-hidden h-full">
        <CarouselSlide index={0} />
        <CarouselSlide index={1} />
        <CarouselSlide index={2} />
      </Slider>
      <div className="absolute w-full tablet:w-[50px] tablet:bg-white rounded-full p-3 right-[50%] translate-x-[50%] bottom-16 tablet:right-[20%] tablet:bottom-8 tablet:aspect-square flex justify-center items-center max-tablet:flex max-tablet:justify-between">
        <ButtonBack id="carousel_back_btn">
          <Image alt="back" width={10} height={10} src={BackIcon} />
        </ButtonBack>
        <ButtonNext id="carousel_next_btn">
          <Image alt="back" width={10} height={10} src={RightIcon} />
        </ButtonNext>
      </div>
      <CarouselHeader label={t_general('carousel.music_is_classic')} />
      <CarouselFooter label={t_general('carousel.follow_us_on')} />
    </CarouselProvider>
  );
};
