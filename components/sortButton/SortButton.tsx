import styles from './SortButton.module.scss';

export function SortButton({ sortName }: { sortName: boolean }) {
  return (
    <button
      className={`${styles.sortButton} ${
        sortName ? styles.sortName : styles.sortNumber
      }`}
    ></button>
  );
}
