import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../badge/Badge';
import { PokemonType } from '@/types';
import { formatNum } from '../../utils/formatNum';
import noImage from '../../public/images/no_image.png';

import style from './Card.module.scss';
import typeColors from '../../styles/typeColors.module.scss';

interface CardProps {
  pokemon: {
    id: number;
    name: string;
    types: PokemonType[];
    image?: string;
    stats: {
      hp: number;
      attack: number;
      defense: number;
    };
  };
}

export function Card({
  pokemon: { id, name, types, image, stats },
}: CardProps) {
  return (
    <>
      <div className={style.card}>
        <div className={style.pokemon__number}>{formatNum(id)}</div>
        <div className={style.card__cover}>
          <Image
            unoptimized
            src={image || noImage}
            alt="cover"
            width={300}
            height={300}
            className={style.pokemon__image}
          />
          <h3 className={style.pokemon__name}>{name}</h3>
        </div>
        <div className={style.card__content}>
          <div className={style.pokemon__types}>
            {types.map((type) => (
              <Badge key={type} type={type} />
            ))}
          </div>
          <Link href={`/pokemon/${id}`}>More Details</Link>
          <div className={style.stats}>
            <div className={style.stat}>
              <span
                className={`${style.stat__value} ${
                  typeColors['type__' + types[0]]
                }`}
              >
                {formatNum(stats.hp)}
              </span>
              <span className={style.stat__name}>HP</span>
            </div>
            <div className={style.stat}>
              <span
                className={`${style.stat__value} ${
                  typeColors['type__' + types[0]]
                }`}
              >
                {formatNum(stats.attack)}
              </span>
              <span className={style.stat__name}>ATK</span>
            </div>
            <div className={style.stat}>
              <span
                className={`${style.stat__value} ${
                  typeColors['type__' + types[0]]
                }`}
              >
                {formatNum(stats.defense)}
              </span>
              <span className={style.stat__name}>DEF</span>
            </div>
          </div>
        </div>
        <div className={style.card__background}>
          <Image
            priority
            unoptimized
            src={image || noImage}
            alt="cover"
            width={300}
            height={300}
            className={style.pokemon__image}
          />
        </div>
      </div>
      <svg width="0" height="0" x="0px" y="0px">
        <defs>
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path
              d="M1.5,0H1H0.5H0v0.8C0.3,0.8,0.3,1,0.5,1c0,0,0,0,0,0C0.8,1,0.8,0.8,1,0.8c0,0,0,0,0,0C1.3,0.8,1.3,1,1.5,1
	C1.8,1,1.8,0.8,2,0.8V0H1.5z"
            />
            <animateTransform
              attributeType="XML"
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-400 0"
              begin="0s"
              dur="5s"
              repeatCount="indefinite"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
