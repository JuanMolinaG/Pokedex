import React, { useRef, useState } from 'react';

import theme from '../../styles/theme.module.scss';
import style from './SearchBar.module.scss';

export function SearchBar({
  setSearch,
}: {
  setSearch: (search: string) => void;
}) {
  const [isSearching, setIsSearching] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsSearching(e.target.value.length > 0);
  };

  const handleClear = () => {
    setIsSearching(false);
    inputRef.current!.value = '';
    setSearch('');
  };

  return (
    <div
      className={`${style.searchBar__container} ${
        focus ? theme.shadowSmall : theme.innerShadow
      }`}
    >
      <span className={style.searchBar__icon}></span>
      <input
        className={style.searchBar__input}
        type="text"
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInput}
        ref={inputRef}
      />
      {isSearching && (
        <span className={style.searchBar__clear} onClick={handleClear}></span>
      )}
    </div>
  );
}
