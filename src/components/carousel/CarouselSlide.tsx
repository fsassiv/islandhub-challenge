'use client';
import { Slide } from 'pure-react-carousel';
import { FC } from 'react';
import { CarouselSlidePropTypes } from './types';

export const CarouselSlide: FC<CarouselSlidePropTypes> = ({ index }) => {
  return (
    <Slide index={index} className="h-full">
      <div className="rounded-3xl bg-white bg-opacity-50 h-full p-8 flex items-center justify-between flex-wrap">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam
          nisi voluptas laudantium consequuntur? Nostrum minus dolores illo
          laboriosam consequuntur asperiores, nihil amet eligendi in non earum
          necessitatibus tempore incidunt!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam
          nisi voluptas laudantium consequuntur? Nostrum minus dolores illo
          laboriosam consequuntur asperiores, nihil amet eligendi in non earum
          necessitatibus tempore incidunt!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam
          nisi voluptas laudantium consequuntur? Nostrum minus dolores illo
          laboriosam consequuntur asperiores, nihil amet eligendi in non earum
          necessitatibus tempore incidunt!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam
          nisi voluptas laudantium consequuntur? Nostrum minus dolores illo
          laboriosam consequuntur asperiores, nihil amet eligendi in non earum
          necessitatibus tempore incidunt!
        </div>
      </div>
    </Slide>
  );
};
