import { PokemonType } from '@/types';
import style from './Badge.module.scss';

export function Badge({ type }: { type: PokemonType }) {
  return (
    <span className={`${style.badge__content} ${style['type__' + type]}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}
