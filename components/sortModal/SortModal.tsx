import { useState } from 'react';
import theme from '../../styles/theme.module.scss';
import style from './SortModal.module.scss';

export function SortModal({ sortName }: { sortName: boolean }) {
  const [sort, setSort] = useState(sortName);

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className={style.sortModal__container}>
      <div className={style.sortModal__header}>
        <h3 className={style.sortModal__title}>Sort by:</h3>
      </div>
      <div className={`${style.sortModal__content} ${theme.innerShadow}`}>
        <div className={style.sortModal__option}>
          <input
            type="radio"
            name="sortBy"
            id="number"
            defaultChecked={!sort}
            onChange={handleSort}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className={style.sortModal__option}>
          <input
            type="radio"
            name="sortBy"
            id="Name"
            defaultChecked={sort}
            onChange={handleSort}
          />
          <label htmlFor="Name">Name</label>
        </div>
      </div>
    </div>
  );
}
