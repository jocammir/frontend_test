import { configureStore } from "@reduxjs/toolkit";
import { SliceProducts } from "./slices/products";
import { SliceCart } from "./slices/cart";

const store = configureStore({
  reducer: {
    ...SliceProducts,
    ...SliceCart,
  },
});

export default store;
