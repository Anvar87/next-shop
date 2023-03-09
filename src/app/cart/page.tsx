"use client";

import { useEffect } from "react";
import  Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hook";

import {
  increment,
  decrement,
  calcTotalCost,
  deleteProduct,
  calcTotalCount,
} from "@/features/cart/cartSlice";

import CartProduct from '@/components/cartproduct';
import LayOut from '@/components/layout';

import styles from '@/styles/Cart.module.scss'
// import { AnyAction } from "@reduxjs/toolkit";

export default function Cart() {
  const { cartProducts, totalCost, totalCount } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  console.log(cartProducts, 'cartProducts cartProducts')

  const calcCostCount = () => {
    dispatch(calcTotalCost());
    dispatch(calcTotalCount());
  }

  useEffect(() => {
    calcCostCount();
    return () => {
      calcCostCount();
    }
  }, [cartProducts]);
  return (
    <main>
      <LayOut>
      {cartProducts.length > 0 ?
        <div>
          <section className={styles.info}>
            <h2 className={styles.info_title}>Корзина ({totalCount})</h2>
            <div className={styles.info_total}>
              {totalCost}
              ₽
            </div>
          </section>
          <section className={styles.product}>
            <ul className={styles.product_list}>
              {cartProducts.map((product, idx) => (
                <CartProduct
                  productInfo={product}
                  actionClickInc={increment}
                  actionClickDec={decrement}
                  key={product.id}
                  deleteAction={deleteProduct}
                />
              ))}
            </ul>
          </section>
          <section className='cart-order'>
            <Link href={''}
              // to={'/fleabot/payment'}
              className='cart-order__create'>Оформить заказ</Link>
          </section>
        </div>
        :
          <div>
            <h2> Корзина пуста!</h2>
          </div>
        } 
    </LayOut>
    </main>
  )
}
