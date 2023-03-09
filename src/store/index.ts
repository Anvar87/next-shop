import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/cart/cartSlice';
import productsReducer from '@/features/products/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const store_0001 = store;
export type AppDispatch = typeof store.dispatch;