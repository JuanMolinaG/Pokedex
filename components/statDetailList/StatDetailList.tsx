import React from 'react';
import { StatDetail } from '../statDetail/StatDetail';

import styles from './StatDetailList.module.scss';

export function StatDetailList({
  stats,
  pokemonType,
}: {
  stats: { name: string; value: number }[];
  pokemonType: string;
}) {
  return (
    <div className={styles.stat__list}>
      {stats.map((stat) => (
        <StatDetail
          key={stat.name}
          statName={stat.name}
          statValue={stat.value}
          pokemonType={pokemonType}
        />
      ))}
    </div>
  );
}
