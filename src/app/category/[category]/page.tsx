"use client";
import { useAppDispatch, useAppSelector } from '@/store/hook';
// import { addProductInCart, calcTotalCost, CartProduct, increment } from '@/features/cart/cartSlice';

import LayOut from '@/components/layout';
import { addToFavoriteList } from "@/features/products/productsSlice";;
import Card from '@/components/card/page';

import styles from '@/styles/Card.module.scss';


export default function Category() {
  const { products } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const addToFavorite = (id: string) => {
    dispatch(addToFavoriteList(id))
  };

  // const addProduct = ( product: CartProduct ) => {
  //   dispatch(addProductInCart(product))
  // }

  return (
    <LayOut>
      <div className={styles.main}>
        <h1 className={styles.title}>Телефоны</h1>
        <div className={styles.list}>
          {products.map((product: any, i: number) => (
            <Card
              key={product.name + i}
              link={`/product/${product.link}`}
              product={product}
              handler={addToFavorite}
              // addProd={addProduct}
            />
          ))}
        </div>
      </div>
    </LayOut>
  )
};

