// import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Image from 'next/image';

import styles from '@/styles/CartProduct.module.scss';
import { useAppDispatch } from '@/store/hook';

const CartProduct = ({ productInfo, actionClickInc, actionClickDec, deleteAction } : any) => {

  const dispatch = useAppDispatch();

  // dispatch(action(productInfo.id))
  dispatch(deleteAction(productInfo.id))

  const stepperAction = (name: string, action: (id: string) => void) => {
    return (
      <button className={styles.product_button}>
        <Image
          src={`${name === 'minus' ? 'icons/delete-trash.svg' : '/icons/plus.svg'}`}
          className={styles.product_icon}
          alt={'stepper action icons'}
        />
      </button>
    )
  };

  return (
    <li className={styles.product}>
      <div className={styles.product_img}>
        <img src={productInfo.image}/>
      </div>
      <div className={styles.product_block}>
        <p className={styles.product_price}>
          {productInfo.price} ₽ <span>x {productInfo.count}</span>
        </p>
        <p className={styles.product_description}>
          {productInfo.description}
        </p>
        <div className={styles.product_actions}>
          <div className={styles.product_stepper}>
            {stepperAction('minus', actionClickInc)}
            <div className={styles.product_count}>{productInfo.count}</div>
            {stepperAction('plus', actionClickDec)}
          </div>
          <div className={styles.product_remove}>
            <Image
              src='icons/delete-trash.svg'
              className={`${styles.product_icon} ${styles.product_icon__remove}`}
              alt={'delete icons'}
            />
          </div>
        </div>
      </div>
  </li>
  )
}

export default CartProduct;
