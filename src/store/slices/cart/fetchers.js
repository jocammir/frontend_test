import { createAsyncThunk } from "@reduxjs/toolkit";
import { NAME_SLICE_CART } from "./namespace";
import { updateCart } from "../../api/cart";

const addCart = createAsyncThunk(`${NAME_SLICE_CART}/addCart`, updateCart);

export const FetchersSliceCart = {
  addCart,
};
