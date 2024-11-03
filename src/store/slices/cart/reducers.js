import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, NAME_SLICE_CART } from "./namespace";
import { ActionsSliceCart } from "./actions";
import { FetchersSliceCart } from "./fetchers";

const ReducerSliceCart = createSlice({
  name: NAME_SLICE_CART,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ActionsSliceCart.cleanCartStore, () => INITIAL_STATE)
      .addCase(FetchersSliceCart.getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchersSliceCart.getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(FetchersSliceCart.getCart.rejected, (state) => {
        state.loading = false;
        state.cart = {};
      });
  },
});

export default ReducerSliceCart.reducer;
