"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LayOut from '@/components/layout';
import { Link } from "react-router-dom";
import { useRouter } from 'next-router-mock';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { addProductInCart, calcTotalCount } from "@/features/cart/cartSlice";
import IconRequest from '@/helpers/iconRequest';

import CartTab from '@/assets/icons/shopping-cart.svg';

import styles from '@/styles/Product.module.scss';


const Product = () => {
  const [isAdded, setIsAdded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    console.log(router, 'router')
  },[])

  const { cartProducts } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  console.log(cartProducts, 'cartProducts')

  const data = router.query;

  useEffect(() => {
    setIsAdded(cartProducts.some(itm => itm.id === data.id));
  }, [data]);

  const handleAddToCart = () => {
    if (!isAdded) {
      dispatch(addProductInCart(data));
      dispatch(calcTotalCount());
      setIsAdded(true);
    } else {
      return <Link to='/cart'>Dashboard</Link>
    }
  };

  return (
    <LayOut>
      <div className={styles.main}>
        <section className={styles.section}>
          <div className={styles.img}>
            <IconRequest path={data.image}/>
          </div>
          <div className={styles.block}>
            <div className={styles.text}>
              {data.name}
            </div>
            <div className={styles.price}>
              {data.price}<span>₽</span>
            </div>
            <div className={styles.description}>
              {data.description}
            </div>
            <div className={styles.button}>
              <div
                className={styles.button__cart + isAdded ? styles.button__active : ''}
                onClick={handleAddToCart}
              >
                <Image src={CartTab} alt='' className={styles.button__icon} />
                <div className={styles.button__info}>
                  <span className={styles.button__text}>{isAdded ? 'Перейти' : 'Добавить'} в корзину</span>
                  <span className={styles.button__price}>{data.price} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayOut>
  )
};

export default Product;