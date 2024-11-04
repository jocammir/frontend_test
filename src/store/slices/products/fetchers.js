import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchProductDetails, fetchProductList } from "../../api/products";
import { NAME_SLICE_PRODUCTS } from "./namespace";

const getProductList = createAsyncThunk(
  `${NAME_SLICE_PRODUCTS}/getList`,
  fetchProductList,
);
const getProductDetails = createAsyncThunk(
  `${NAME_SLICE_PRODUCTS}/getDetails`,
  fetchProductDetails,
);

export const FetchersSliceProducts = {
  getProductList,
  getProductDetails,
};
