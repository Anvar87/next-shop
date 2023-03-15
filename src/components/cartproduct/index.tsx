import { useAppDispatch } from '@/store/hook';

import Image from 'next/image';

import DeleteTrash from '@/assets/icons/delete.svg';
import Plus from '@/assets/icons/plus.svg';
import Minus from '@/assets/icons/minus.svg';
import PurplePhone from "@/assets/images/18503-63Deeppurple.jpg";

import styles from '@/styles/CartProduct.module.scss';
import { createProduct } from '@/features/products/productsSlice';

const CartProduct = ({ productInfo, counter, deleteAction } : any) => {
  const dispatch = useAppDispatch();

  // dispatch(action(productInfo.id))
  // dispatch(deleteAction(productInfo.id))

  return (
    <li className={styles.product}>
      <div className={styles.product_img}>
        <Image src={PurplePhone} alt=''/>
      </div>
      <div className={styles.product_block}>
        <p className={styles.product_description}>
          {productInfo.description}
        </p>
        <p className={styles.product_price}>
          {productInfo.price}
          <span> ₽ / шт.</span>
        </p>
        <div className={styles.product_actions}>
          <div className={styles.product_stepper}>
            <button className={styles.product_button} onClick={() => counter('minus', productInfo.id)}>
              <Image
                src={Minus}
                className={styles.product_icon}
                alt=''
                width={`${100}`}
                height={`${100}`}
              />
            </button>
          <div className={styles.product_count}>{productInfo.count}</div>
            <button className={styles.product_button} onClick={() => counter('plus', productInfo.id)}>
              <Image
                src={Plus}
                className={styles.product_icon}
                alt=''
                width={`${100}`}
                height={`${100}`}
              />
            </button>
          </div>
          <div className={styles.product_remove} onClick={()=> {
              dispatch(deleteAction(productInfo.id));
              dispatch(createProduct({ ...productInfo, isAdded: false }));
            }
          }>
            <Image
              src={DeleteTrash}
              className={`${styles.product_icon} ${styles.product_icon__remove}`}
              alt='delete icons'
            />
          </div>
        </div>
      </div>
  </li>
  )
}

export default CartProduct;
