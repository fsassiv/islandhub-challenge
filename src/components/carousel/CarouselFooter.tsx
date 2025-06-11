import { FC } from 'react';
import { SocialLinkButton } from '../buttons';
import { LabelPropTypes } from './types';

export const CarouselFooter: FC<LabelPropTypes> = ({ label }) => {
  return (
    <div className="flex items-center max-tablet:hidden absolute left-8 bottom-8">
      <h5 className="mr-2 text-[#7D7D7D]">{label}</h5>
      <SocialLinkButton icon="twitter" />
      <SocialLinkButton icon="tiktok" />
      <SocialLinkButton icon="instagram" />
      <SocialLinkButton icon="linkedin" />
    </div>
  );
};
