import { createAsyncThunk } from "@reduxjs/toolkit";
import { NAME_SLICE_PRODUCTS } from "./namespace";
import { fetchProductDetails, fetchProductList } from "../../api/products";

const getProductList = createAsyncThunk(
  `${NAME_SLICE_PRODUCTS}/getProductList`,
  fetchProductList,
);
const getProductDetails = createAsyncThunk(
  `${NAME_SLICE_PRODUCTS}/getProductDetails`,
  fetchProductDetails,
);

export const FetchersSliceProducts = {
  getProductList,
  getProductDetails,
};
