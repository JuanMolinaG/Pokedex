import React from 'react';
import styles from './SortButton.module.scss';

export function SortButton({
  sortName,
  showModal,
  setShowModal,
}: {
  sortName: boolean;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}) {
  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <button
      className={`${styles.sortButton} ${
        sortName ? styles.sortName : styles.sortNumber
      }`}
      onClick={handleClick}
    ></button>
  );
}
