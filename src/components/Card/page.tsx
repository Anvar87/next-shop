
import Link from "next/link";

import sliceText from '@/helpers/sliceText';
import Icon from "@/helpers/iconRequest";

import './item.css';


const Card = ({ link, data, handler }: any) => {

  return (
    <div className='products-card'>
        <div className='products-favorite'>
          {/* <Image src='/icons/favorite-like-love.svg' alt="icon"
            className={`products-favorite__icon ${data.isFavorite ? 'products-favorite__icon-active' : ''}`}
          /> */}
          <Icon className={`products-favorite__icon ${data.isFavorite ? 'products-favorite__icon-active' : ''}`} path={'icons/favorite-like-love.svg'} />
        </div>
        <Link href={link} className='products-link'>
          <div className='products-block'>
            <Icon className='products-block__img' path={data.image} />
          </div>
            <p className=' products-description'>{sliceText(data.description)}...</p>
            <p  className='products-price'>{data.price} <span>₽</span></p>
        </Link>
    </div>
  );
};

export default Card;
