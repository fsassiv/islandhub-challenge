'use client';
import { useTranslations } from 'next-intl';
import { IconButton, LogoButton, UserBadgeButton } from '../buttons';

import { SearchBar } from '../search_bar';

export function Header() {
  const t_general = useTranslations('general');
  const t_forms = useTranslations('forms');

  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <header
      id="app-header"
      className="rounded-full tablet:bg-white tablet:bg-opacity-60 h-auto p-2 flex flex-col tablet:flex-row tablet:justify-between"
    >
      <div className="flex max-tablet:mb-2">
        <LogoButton
          text={t_general('company_name')}
          onClick={() => console.log('click')}
        />
        <SearchBar
          inputPlaceholder={t_forms('search_products')}
          onSearch={handleSearch}
        />
      </div>
      <div className="flex">
        <IconButton onClick={() => console.log('take to cart')} icon="bag" />
        <IconButton
          onClick={() => console.log('take to favorites')}
          icon="heart"
        />
        <UserBadgeButton onClick={() => console.log('take to the profile')} />
      </div>
    </header>
  );
}
