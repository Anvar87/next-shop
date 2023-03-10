"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LayOut from '@/components/layout';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { addProductInCart, calcTotalCount, CartProduct } from "@/features/cart/cartSlice";
import { useRouter } from "next/navigation"

import CartTab from '@/assets/icons/shopping-cart.svg';
import PurplePhone from "@/assets/images/18503-63Deeppurple.jpg";

import styles from '@/styles/Product.module.scss';


const Product = (props: any) => {
  const [isAdded, setIsAdded] = useState(false);
  const [product, setProduct] = useState<CartProduct>({
    name: '',
    id: '',
    image: '',
    price: 0,
    count: 0,
    description: ''
  });
  const { products } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const router = useRouter();

   useEffect(() => {
    const item = products.find(item => item.link === `/${props.params.product}`);
    if (item !== undefined) setProduct({...item, count: 0});
  }, []);

  const handleAddToCart = () => {
    const product = products.find(item => item.link === `/${props.params.product}`)
    if (!isAdded) {
      dispatch(addProductInCart(product));
      dispatch(calcTotalCount());
      setIsAdded(true);
    } else {
      router.push('/cart');
    }
  };

  return (
    <LayOut>
      <div className={styles.main}>
        <section className={styles.section}>
          <div className={styles.img}>
            <Image src={PurplePhone} alt=""/>
          </div>
          <div className={styles.block}>
            <div className={styles.text}>
              {product.name}
            </div>
            <div className={styles.price}>
              {product.price}<span>₽</span>
            </div>
            <div className={styles.description}>
              {product.description}
            </div>
            <div className={styles.button}>
              <div
                className={styles.button__cart + isAdded ? styles.button__active : ''}
                onClick={handleAddToCart}
              >
                <Image src={CartTab} alt='' className={styles.button__icon} />
                <div className={styles.button__info}>
                  <span className={styles.button__text}>{isAdded ? 'Перейти' : 'Добавить'} в корзину</span>
                  <span className={styles.button__price}>{product.price} ₽</span>
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