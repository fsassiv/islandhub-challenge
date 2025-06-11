'use client';
import { useTranslations } from 'next-intl';
import { IconButton, LogoButton, UserBadgeButton } from '../buttons';

import { useCartCxt } from '@/context';
import { SearchBar } from '../search_bar';

export function Header() {
  const { cartQty } = useCartCxt();

  const t_general = useTranslations('general');
  const t_forms = useTranslations('forms');

  return (
    <header
      id="app-header"
      className="rounded-full tablet:bg-white tablet:bg-opacity-60 h-auto p-2 flex flex-col tablet:flex-row tablet:justify-between"
    >
      <div className="flex max-tablet:mb-2">
        <LogoButton text={t_general('company_name')} />
        <SearchBar inputPlaceholder={t_forms('search_products')} />
      </div>
      <div className="flex">
        <IconButton icon="cart" cartCount={cartQty} />
        <IconButton icon="favorites" />
        <UserBadgeButton />
      </div>
    </header>
  );
}
