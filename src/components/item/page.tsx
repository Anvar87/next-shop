
import Link from "next/link";
import Image from 'next/image';

import { sliceText } from '@/helper';

import './item.css';


const Item = ({ link, data, handler }: any) => {


  return (
    <div className='products-card'>
        <div className='products-favorite'>
          {/* <Image src='/icons/favorite-like-love.svg' alt="icon"
            className={`products-favorite__icon ${data.isFavorite ? 'products-favorite__icon-active' : ''}`}
          /> */}
        </div>
        <Link href={link} className='products-link'>
          <div className='products-block'>
            <Image className='products-block__img' src={data.image} alt=''/>
          </div>
            <p className=' products-description'>{sliceText(data.description)}...</p>
            <p  className='products-price'>{data.price} <span>₽</span></p>
        </Link>
    </div>
  );
};

export default Item;
