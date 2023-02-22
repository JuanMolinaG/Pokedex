import styles from './SortButton.module.scss';

export function SortButton({ sortNumber }: { sortNumber: boolean }) {
  return (
    <button
      className={`${styles.sortButton} ${
        sortNumber ? styles.sortNumber : styles.sortName
      }`}
    ></button>
  );
}
