import React from 'react';
import { motion } from 'framer-motion';
import { useOutsideClick } from '../../hooks/useOutsideClick';

import theme from '../../styles/theme.module.scss';
import style from './SortModal.module.scss';

export function SortModal({
  sortName,
  setSortName,
  setShowModal,
}: {
  sortName: boolean;
  setSortName: (sortName: boolean) => void;
  setShowModal: (showModal: boolean) => void;
}) {
  const handleSort = () => {
    setSortName(!sortName);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const ref = useOutsideClick(handleCloseModal);

  const defaultAnimationState = {
    opacity: 0,
    scale: 0,
  };

  return (
    <motion.div
      className={style.sortModal__container}
      ref={ref}
      key="modal"
      initial={defaultAnimationState}
      exit={defaultAnimationState}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.25,
      }}
      style={{ transformOrigin: 'right top' }}
    >
      <div className={style.sortModal__header}>
        <h3 className={style.sortModal__title}>Sort by:</h3>
      </div>
      <div className={`${style.sortModal__content} ${theme.innerShadow}`}>
        <div className={style.sortModal__option}>
          <input
            type="radio"
            name="sortBy"
            id="number"
            defaultChecked={!sortName}
            onChange={handleSort}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className={style.sortModal__option}>
          <input
            type="radio"
            name="sortBy"
            id="Name"
            defaultChecked={sortName}
            onChange={handleSort}
          />
          <label htmlFor="Name">Name</label>
        </div>
      </div>
    </motion.div>
  );
}
