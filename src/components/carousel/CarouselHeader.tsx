import SpeakerIcon from '@/public/icons/speaker-3-fill-svgrepo-com.svg';
import Image from 'next/image';
import { FC } from 'react';
import { LabelPropTypes } from './types';

export const CarouselHeader: FC<LabelPropTypes> = ({ label }) => {
  return (
    <div className="absolute top-8 left-8 bg-white rounded-full py-2 px-4 flex items-center">
      <Image
        className="fill-red-50"
        alt="speaker_icon"
        width={20}
        height={20}
        src={SpeakerIcon}
      />
      <h5 className="font-bold text-[#7D7D7D]">{label}</h5>
    </div>
  );
};
