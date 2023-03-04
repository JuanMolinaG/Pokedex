import React from 'react';
import styles from './SortButton.module.scss';

export function SortButton({
  sortName,
  showModal,
  handleShowModal,
}: {
  sortName: boolean;
  showModal: boolean;
  handleShowModal: (show: boolean) => void;
}) {
  const handleClick = () => {
    handleShowModal(!showModal);
  };

  return (
    <button
      className={`${styles.sortButton} ${
        sortName ? styles.sortName : styles.sortNumber
      } ${showModal}`}
      id="sortButton"
      onClick={handleClick}
    ></button>
  );
}
