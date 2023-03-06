import { formatNum } from '../..//utils/formatNum';
import React from 'react';

import styles from './StatDetail.module.scss';
import typeColors from '../../styles/typeColors.module.scss';

export function StatDetail({
  statName,
  statValue,
  pokemonType,
}: {
  statName: string;
  statValue: number;
  pokemonType: string;
}) {
  return (
    <div className={styles.stat__container}>
      <span
        className={`${styles.stat__name} ${
          typeColors[pokemonType + '__color']
        }`}
      >
        {statName.toUpperCase()}
      </span>
      <span className={`${styles.stat__value} ${pokemonType}`}>
        {formatNum(statValue)}
        <progress max={255} value={statValue} />{' '}
      </span>
    </div>
  );
}
