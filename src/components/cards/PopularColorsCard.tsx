'use client';
import { useTranslations } from 'next-intl';
import { ToastContainer, toast } from 'react-toastify';
import { BaseCard } from './BaseCard';
import { COLORS } from './utils';

export const PopularColorsCard = () => {
  const t_cards = useTranslations('cards');

  const handleClick = (from: string, to: string) => {
    toast(t_cards('popular_colors.toast_text'), {
      style: {
        background: `linear-gradient(0deg, ${from}, ${to})`,
        color: '#fff',
        fontSize: '16px',
        padding: '16px',
      },
    });
  };

  return (
    <BaseCard>
      <div className="flex flex-col p-4 w-full">
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
                onClick={() => handleClick(color.from, color.to)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer hideProgressBar />
    </BaseCard>
  );
};
