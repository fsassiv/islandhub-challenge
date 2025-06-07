import { SlideTypes } from '@/types/common';

export type CarouselSlidePropTypes = {
  // children: React.ReactNode;
  index: number;
  data: SlideTypes;
};

export type LabelPropTypes = {
  label: string;
};

export type CarouselPropTypes = {
  data: SlideTypes[] | undefined;
};
