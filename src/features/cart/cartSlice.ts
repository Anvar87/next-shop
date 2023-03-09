import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type CartProducts = {
  name: string | number;
  id: string | number;
  image: any;
  price: number;
  count: number;
  description: string;
}

type CartState = {
  cartProducts: CartProducts[];
  totalCost: number;
  totalCount: number;
}

const initialState: CartState = {
  cartProducts: [],
  totalCost: 0,
  totalCount: 0,
}

const calcProductCount = (products: CartProducts[], arg: PayloadAction<string>) => {
  const id = arg.payload;
  const type = arg.type;
  const isIncrement = type === 'cart/increment';
  const numb = isIncrement ? 1 : 0;

  products = products.map((item) => {
    console.log(item, 'item')
    if (item.id === id && item.count > numb) {
      const count = isIncrement ? item.count -= 1 : item.count += 1;
      return { ...item, count };
    }
    return item;
  });
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    increment: (state, arg: PayloadAction<string>) => {
      calcProductCount(state.cartProducts, arg);
    },
    decrement: (state, arg) => {
      calcProductCount(state.cartProducts, arg);
    },
    calcTotalCost: (state) => {
      state.totalCost = state.cartProducts.reduce(
        (calc, product) => calc += (product.price * product.count)
      , 0);
    },
    deleteProduct: (state, arg) => {
      const id = arg.payload;
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== id
      );
    },
    calcTotalCount: (state) => {
      state.totalCount = state.cartProducts.reduce(
        (calc, product) => calc += product.count
      , 0);
    },
    addProductInCart: (state, arg) => {
      const product = arg.payload;
      state.cartProducts.push({ ...product, count: 1 });
    },
  }
});

export const {
  increment,
  decrement,
  calcTotalCost,
  deleteProduct,
  calcTotalCount,
  addProductInCart
} = cartSlice.actions;

export default cartSlice.reducer;
