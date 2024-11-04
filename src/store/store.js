import { configureStore } from "@reduxjs/toolkit";
import { SliceProducts } from "./slices/products";
import { SliceCart } from "./slices/cart";
import { SliceToast } from "./slices/toast";

const store = configureStore({
  reducer: {
    ...SliceProducts,
    ...SliceCart,
    ...SliceToast,
  },
});

export default store;
