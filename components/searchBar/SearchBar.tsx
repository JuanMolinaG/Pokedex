import { useState } from 'react';

import theme from '../../styles/theme.module.scss';
import style from './SearchBar.module.scss';

export function SearchBar() {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClear = () => {
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
        value={search}
      />
      {search.length > 0 && (
        <span className={style.searchBar__clear} onClick={handleClear}></span>
      )}
    </div>
  );
}
