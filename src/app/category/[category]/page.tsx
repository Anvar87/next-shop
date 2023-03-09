"use client"

import LayOut from '@/components/layout';

import { addToFavoriteList } from "@/features/products/productsSlice";
// import { useRouter } from 'next/router';
import Card from '@/components/card/page';
import styles from '@/styles/Card.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { addProductInCart, calcTotalCost, increment } from '@/features/cart/cartSlice';
import { useRouter } from 'next-router-mock';
import { useEffect } from 'react';


type Params = {
  params: {
    category: string
  }
}


export default function Category({ ...params }: any) {
  const { products } = useAppSelector(state => state.products);
  console.log(products, 'products')
  const dispatch = useAppDispatch();

  const addToFavorite = (id: string) => {
    dispatch(addToFavoriteList(id))
  };

  const router = useRouter();

  const addProduct = ( product:any ) => {
    router.push({query: product})
  }

  return (
    <LayOut>
      <div className={styles.main}>
        <h1 className={styles.title}>Телефоны</h1>
        <div className={styles.list}>
          {products.map((product: any, i: number) => (
            <Card
              key={product.name + i}
              link={`/product/${product.link}`}
              data={product}
              handler={addToFavorite}
              addProd={()=>addProduct(product)}
            />
          ))}
        </div>
      </div>
    </LayOut>
  )
};

