import React from 'react';
import { PokemonType } from '@/types';

import style from './Badge.module.scss';
import typeColors from '../../styles/typeColors.module.scss';

export function Badge({ type }: { type: PokemonType }) {
  return (
    <span className={`${style.badge__content} ${typeColors['type__' + type]}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}
