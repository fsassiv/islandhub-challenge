'use client';

import Image from 'next/image';
import { FC, KeyboardEventHandler, useState } from 'react';
import SearchIcon from '../../../public/icons/search-status-svgrepo-com.svg';
import { SearchBarPropTypes } from './types';

export const SearchBar: FC<SearchBarPropTypes> = ({
  inputPlaceholder,
  onSearch,
}) => {
  const [text, setText] = useState('');

  const handleOnKeyDown: KeyboardEventHandler<HTMLInputElement> | undefined = ({
    key,
  }) => {
    if (key === 'Enter') {
      onSearch(text);
    }
  };

  return (
    <div className="rounded-full bg-white relative overflow-hidden w-full desktop:w-[300px] xl:w-[400px]">
      <input
        id="search-bar-input"
        type="text"
        className="h-full w-full p-2 pl-6 outline-none"
        placeholder={inputPlaceholder}
        onChange={({ target }) => setText(target.value)}
        onKeyDown={handleOnKeyDown}
      />
      <button
        id="search-bar-button"
        className="rounded-full bg-foreground p-3 absolute right-1 top-[50%] translate-y-[-50%]"
        onClick={() => onSearch(text)}
      >
        <Image
          alt="search_icon"
          width={20}
          height={20}
          color="#fff"
          src={SearchIcon}
        />
      </button>
    </div>
  );
};
