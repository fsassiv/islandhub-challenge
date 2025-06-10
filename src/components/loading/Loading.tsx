import { useTranslations } from 'next-intl';
import { FC } from 'react';

export const Loading: FC = () => {
  const t_general = useTranslations('general');

  return <main className="p-4 text-gray-600">{t_general('loading')}</main>;
};
