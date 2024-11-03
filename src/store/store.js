import { configureStore } from "@reduxjs/toolkit";
import { SliceProducts } from "./slices/products";

const store = configureStore({
  reducer: {
    ...SliceProducts,
  },
});

export default store;
