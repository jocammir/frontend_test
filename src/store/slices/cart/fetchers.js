import { createAsyncThunk } from "@reduxjs/toolkit";

import { updateCart } from "../../api/cart";
import { NAME_SLICE_CART } from "./namespace";

const addCart = createAsyncThunk(`${NAME_SLICE_CART}/addCart`, updateCart);

export const FetchersSliceCart = {
  addCart,
};
