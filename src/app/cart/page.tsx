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

export default function Cart() {
  const { cartProducts, totalCost, totalCount } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const calcCostCount = () => {
    dispatch(calcTotalCost());
    dispatch(calcTotalCount());
  }

  const counter = (action: string, id: string) => {
    if (action === 'minus') dispatch(decrement(id))
    else dispatch(increment(id))
    calcCostCount();
  }

  useEffect(() => {
    calcCostCount();
  }, [cartProducts]);

  return (
    <main className={styles.main}>
      <LayOut>
      {cartProducts.length > 0 ?
        <div>
          <section className={styles.info}>
            <h2 className={styles.info_title}>Корзина ({totalCount})</h2>
            <div className={styles.info_total}>{totalCost} ₽</div>
          </section>
          <section className={styles.product}>
            <ul className={styles.product_list}>
              {cartProducts.map((product, idx) => (
                <CartProduct
                  productInfo={product}
                  counter={counter}
                  key={product.id}
                  deleteAction={deleteProduct}
                />
              ))}
            </ul>
          </section>
          <section className={styles.order}>
            <Link href='/payment' className={styles.create}>Перейти к оформлению</Link>
          </section>
        </div>
        :
          <div className={styles.empty}>
            <h2>Корзина пуста!</h2>
          </div>
        }
    </LayOut>
    </main>
  )
}
