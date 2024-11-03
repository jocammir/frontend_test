import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, NAME_SLICE_CART } from "./namespace";
import { ActionsSliceCart } from "./actions";
import { FetchersSliceCart } from "./fetchers";
import { setItem } from "../../storage";

const ReducerSliceCart = createSlice({
  name: NAME_SLICE_CART,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ActionsSliceCart.cleanCartStore, () => INITIAL_STATE)
      .addCase(ActionsSliceCart.setCartParams, (state, action) => {
        state.cartParams = action.payload;
      })
      .addCase(FetchersSliceCart.getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchersSliceCart.getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        state.lastFetched = Date.now();
        setItem(NAME_SLICE_CART, state);
      })
      .addCase(FetchersSliceCart.getCart.rejected, (state) => {
        state.loading = false;
        state.cart = {};
      });
  },
});

export default ReducerSliceCart.reducer;
