'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Error() {
  const t_error = useTranslations('error.general');

  return (
    <div className="w-full text-center rounded-3xl bg-black text-white h-fit p-4 desktop:p-8">
      <h2 className="mb-4">{t_error('title')}</h2>
      <Link href="/">{t_error('go_home_btn')}</Link>
    </div>
  );
}
