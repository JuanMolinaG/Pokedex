import { PokemonType } from '@/types';
import style from './Badge.module.scss';

interface BadgeProps {
  type: PokemonType;
  children: React.ReactNode;
}

export function Badge({ type, children }: BadgeProps) {
  return (
    <span className={`${style.badge__content} ${style['type__' + type]}`}>
      {children}
    </span>
  );
}
