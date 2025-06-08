'use client';
import { useTranslations } from 'next-intl';
import { CardBase } from './CardBase';
import { COLORS } from './utils';

export const PopularColorsCard = () => {
  const t_cards = useTranslations('general.cards');

  return (
    <CardBase>
      <div className="flex flex-col p-4">
        <h4 className="mb-2">{t_cards('popular_colors.title')}</h4>
        <ul className="flex">
          {COLORS.map((color) => (
            <li key={color.from + '-' + color.to} className="mr-2">
              <button
                id={`popular-color-${color.from}-${color.to}`}
                className="rounded-full border-8 border-white aspect-square w-[40px] shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(to top, ${color.from}, ${color.to})`,
                }}
                // onClick={()=>console.log('add toast for click')}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </CardBase>
  );
};
