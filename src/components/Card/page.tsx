import Link from 'next/link';
import Image from 'next/image';

import sliceText from '@/helpers/sliceText';
import FavoriteIcon from '@/assets/icons/favorite-like-love.svg';

import styles from '@/styles/Card.module.scss';


const  Card = ({ link, product, handler }: any) => {
  return (
    <div className={styles.main}>
      <div className={styles.favorite} onClick={handler}>
        <Image
          className={`
            ${styles.favorite_icon}
            ${product.isFavorite ? styles.active : ''}
          `}
          src={FavoriteIcon}
          alt=""
        />
      </div>
      <Link href={link} className={styles.link}>
        <div className={styles.block}>
          <Image className={styles.block__img} src={product.image} alt=""/>
        </div>
          <p className={styles.description}>{sliceText(product.description)}...</p>
          <p className={styles.price}>{product.price} <span>₽</span></p>
      </Link>
    </div>
  );
};

export default Card;
