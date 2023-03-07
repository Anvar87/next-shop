"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LayOut from '@/components/layout';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import CartTab from '@/assets/icons/shopping-cart.svg';
import IconRequest from '@/helpers/iconRequest';

// import { addProductInCart, calcTotalCount } from "../../features/cart/cartSlice";

import styles from '@/styles/Product.module.scss';

const Product = () => {
  const [isAdded, setIsAdded] = useState(false);

  // const location = useLocation();
  // const navigate = useNavigate();

  // const { cartProducts } = useSelector(state => state.cart);
  // const dispatch = useDispatch();

  // const data = location.state;

  // useEffect(() => {
  //   setIsAdded(cartProducts.some(itm => itm.id === data.id));
  // }, [data]);

  // const handleAddToCart = () => {
  //   if (!isAdded) {
  //     dispatch(addProductInCart(data));
  //     dispatch(calcTotalCount());
  //     setIsAdded(true);
  //   } else {
  //     navigate('/fleabot/cart');
  //   }
  // };

  return (
    <LayOut>
      <div className={styles.main}>
        <section className={styles.section}>
          <div className={styles.img}>
            {/* <img src={data.image}/> */}
            <IconRequest path='images/18503-63Deeppurple.jpg'/>
          </div>
          <div className={styles.block}>
            <div className={styles.text}>
              {/* {data.description} */}
              <p>Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)</p>
            </div>
            <div className={styles.price}>
              <b>114990 <span>₽</span></b>
            </div>
            <div className={styles.description}></div>
            <div className={styles.button}>
              <div
                className={styles.button__cart + isAdded ? styles.button__active : ''}
                // onClick={handleAddToCart}
              >
                <Image src={CartTab} alt='' className={styles.button__icon} />
                <div className={styles.button__info}>
                  <span className={styles.button__text}>{isAdded ? 'Перейти' : 'Добавить'} в корзину</span>
                  {/* <span className={styles.button__price}>{data.price} ₽</span> */}
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