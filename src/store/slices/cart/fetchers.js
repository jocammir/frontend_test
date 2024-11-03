import { createAsyncThunk } from "@reduxjs/toolkit";
import { NAME_SLICE_CART } from "./namespace";
import { updateCart } from "../../api/cart";

const getCart = createAsyncThunk(`${NAME_SLICE_CART}/getCart`, updateCart);

export const FetchersSliceCart = {
  getCart,
};
