import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import PurplePhone from "@/assets/images/18503-63Deeppurple.jpg";

const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max',
    image: PurplePhone,
    price: 114990,
    description: 'Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)',
    link: '/apple-iphone-14-pro-max-128gb-deep-purple',
    isFavorite: false,
    isAdded: false
  },
  {
    id: 2,
    name: 'Apple iPhone 13 mini',
    image: PurplePhone,
    price: 70990,
    description: 'Apple iPhone 13 mini 128GB (Розовый | Pink)',
    link: '/apple-iphone-13-mini-128gb-pink',
    isFavorite: false,
    isAdded: false
  },
  {
    id: 3,
    name: 'Apple iPhone 12 Pro',
    image: PurplePhone,
    price: 78990,
    description: 'Apple iPhone 12 Pro Max 128GB (Графитовый | Graphite)',
    link: '/apple-iphone-12-pro-max-128gb-graphite',
    isFavorite: false,
    isAdded: false
  },
  {
    id: 4,
    name: 'Apple iPhone 14 Pro Max',
    image: PurplePhone,
    price: 114990,
    description: 'Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)',
    link: '/apple-iphone-14-pro-max-128gb-deep-purple',
    isFavorite: false,
    isAdded: false
  },
  {
    id: 5,
    name: 'Apple iPhone 13 mini',
    image: PurplePhone,
    price: 70990,
    description: 'Apple iPhone 13 mini 128GB (Розовый | Pink)',
    link: '/apple-iphone-13-mini-128gb-pink',
    isFavorite: false,
    isAdded: false
  },
  {
    id: 6,
    name: 'Apple iPhone 12 Pro',
    image: PurplePhone,
    price: 78990,
    description: 'Apple iPhone 12 Pro Max 128GB (Графитовый | Graphite)',
    link: '/apple-iphone-12-pro-max-128gb-graphite',
    isFavorite: false,
    isAdded: false
  }
];

// type ProductItem = {
//   id: number;
//   name: string;
//   image: any;
//   price: number;
//   description: string;
//   link: string;
//   isFavorite: boolean;
//   isAdded: boolean;
// }

type Product = {
  id: number;
  name: string;
  image: any;
  price: number;
  description: string;
  link: string;
  isFavorite: boolean;
  isAdded: boolean;
}

type Products = {
  products: Product[];
  product: Product;
  favorites: Product[];
}

const initialState: Products = {
  products,
  product: {} as Product,
  favorites: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addToFavoriteList: (state, arg: PayloadAction<string>) => {
      const id = Number(arg.payload);
      state.products = state.products.map((product) => {
        if (product.id === id) {
          return {...product, isFavorite: !product.isFavorite }
        }
        return product;
      });
      state.favorites = state.products.filter((favorite) => favorite.isFavorite);
    },
    createProduct: (state, arg: PayloadAction<Product>) => {
      state.product = arg.payload;
    }
  }
});

export const { addToFavoriteList, createProduct } = productSlice.actions;

export default productSlice.reducer;
