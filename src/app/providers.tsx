'use client';
import { store_0001 } from "@/store"
import { Provider } from "react-redux"

export function Providers({ children }) {
  return (
    <Provider store={store_0001}>
      {children}
    </Provider>
  );
}