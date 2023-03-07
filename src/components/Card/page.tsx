
import Link from "next/link";

import sliceText from '@/helpers/sliceText';
import Icon from "@/helpers/iconRequest";

import styles from '@/styles/Card.module.scss';
import IconRequest from "@/helpers/iconRequest";



const Card = ({ link, data, handler }: any) => {

  return (
    <div className={styles.main}>
        <div className={styles.favorite}>
          <IconRequest
            className={`
              ${styles.favorite_icon}
              ${data.isFavorite ? styles.active : ''}
            `}
            path={'icons/favorite-like-love.svg'}
          />
        </div>
        <Link href={link} className={styles.link}>
          <div className={styles.block}>
            <Icon className={styles.block__img} path={data.image} />
          </div>
            <p className={styles.description}>{sliceText(data.description)}...</p>
            <p  className={styles.price}>{data.price} <span>₽</span></p>
        </Link>
    </div>
  );
};

export default Card;
