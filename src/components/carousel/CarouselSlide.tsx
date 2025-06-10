'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Slide } from 'pure-react-carousel';
import { FC } from 'react';
import { CtaLinkButton } from '../buttons';
import { CarouselSlidePropTypes } from './types';

export const CarouselSlide: FC<CarouselSlidePropTypes> = ({ index, data }) => {
  const t_general = useTranslations('general');

  return (
    <Slide index={index} className="h-full">
      <div className="rounded-3xl bg-white bg-opacity-60 h-full p-8 flex items-center justify-between flex-wrap font-sans relative desktop:h-[55vh]">
        <div className="relative flex flex-col tablet:w-2/3 h-full items-start tablet:justify-center max-tablet:pt-[12%] max-tablet:z-10">
          <h1 className="font-bold text-5xl  mb-4 desktop:w-2/3">
            {t_general(`carousel.${data.id}.title`)}
          </h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              <h1
                className="text-5xl font-bold text-opacity-90"
                style={{
                  color: 'white',
                  textShadow:
                    '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, -1px 0px 0 #000, 1px 0px 0 #000,0px -1px 0 #000, 0px 1px 0 #000',
                }}
              >
                {t_general(`carousel.${data.id}.index`)}
              </h1>
              <span className="px-2 max-desktop:hidden">
                ----------------&gt;
              </span>
            </div>
            <div className="flex flex-col w-2/3">
              <h4 className="text-lg">
                {t_general(`carousel.${data.id}.subtitle`)}
              </h4>
              <p className="font-light">
                {t_general(`carousel.${data.id}.description`)}
              </p>
            </div>
          </div>
          <CtaLinkButton
            href={data.href}
            text={t_general(`carousel.${data.id}.cta_btn_label`)}
          />
        </div>
        <div
          className="flex justify-center items-center w-full tablet:w-1/3 max-tablet:absolute max-tablet:opacity-90"
          style={{
            background: 'radial-gradient(circle, #C3DED1 0%, transparent 75%)',
          }}
        >
          <Image
            alt={data.title}
            width={200}
            height={200}
            src={data.img_url}
            // className="w-full"
          />
        </div>
      </div>
    </Slide>
  );
};
