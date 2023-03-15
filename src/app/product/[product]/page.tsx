"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LayOut from '@/components/layout';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { addProductInCart, calcTotalCount, CartProduct } from "@/features/cart/cartSlice";
import { createProduct } from "@/features/products/productsSlice";
import { useRouter } from "next/navigation"

import CartTab from '@/assets/icons/shopping-cart.svg';
import PurplePhone from "@/assets/images/18503-63Deeppurple.jpg";

import styles from '@/styles/Product.module.scss';


const Product = (props: any) => {
  const { products } = useAppSelector(state => state.products);
  const { product } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const router = useRouter();

   useEffect(() => {
    const productItem = products.find(item => item.link === `/${props.params.product}`);
    if (product.name !== productItem.name) {
      dispatch(createProduct({ ...productItem, isAdded: false }));
    }
  }, []);

  const handleAddToCart = () => {
    const productItem = products.find(item => item.link === `/${props.params.product}`)
    if (productItem && !product.isAdded) {
      dispatch(createProduct({ ...productItem, isAdded: true }));
      dispatch(addProductInCart(productItem));
      dispatch(calcTotalCount());
    } else {
      router.push('/cart');
    }
  };

  return (
    // <LayOut>
      <div className={styles.main}>
        <section className={styles.section}>
          <div className={styles.img}>
            <Image src={PurplePhone} alt=""/>
          </div>
          <div className={styles.block}>
            <div className={styles.text}>
              {product.description}
            </div>
            <div className={styles.description}>
              {/* {product.description} */}
            </div>
            <div className={styles.pay}>
              <div className={styles.price}>{product.price} ₽</div>
              <div className={styles.button}>
                <div
                  className={styles.button__cart + product.isAdded ? styles.button__active : ''}
                  onClick={handleAddToCart}
                >
                  <Image src={CartTab} alt='' className={styles.button__icon}/>
                  <div className={styles.button__text}>{product.isAdded ? 'Перейти' : 'Добавить'} в корзину</div>
                  {/* <div className={styles.button__info}> */}
                    {/* <span className={styles.button__price}>{product.price} ₽</span> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    // </LayOut>
  )
};

export default Product;

