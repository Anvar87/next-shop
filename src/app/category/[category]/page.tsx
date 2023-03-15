"use client";
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { addToFavoriteList } from "@/features/products/productsSlice";

import Card from '@/components/card/page';

import styles from '@/styles/Category.module.scss';


export default function Category() {
  const { products } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  const addToFavorite = (id: string) => {
    dispatch(addToFavoriteList(id));
  };


  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Телефоны</h1>
      <div className={styles.list}>
        {products.map((product: any, i: number) => (
          <Card
            key={product.name + i}
            link={`/product/${product.link}`}
            product={product}
            handler={addToFavorite}
          />
        ))}
      </div>
    </div>
  )
};

