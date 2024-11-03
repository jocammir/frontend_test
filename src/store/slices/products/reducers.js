import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, NAME_SLICE_PRODUCTS } from "./namespace";
import { ActionsSliceProducts } from "./actions";
import { FetchersSliceProducts } from "./fetchers";

const ReducerSliceProducts = createSlice({
  name: NAME_SLICE_PRODUCTS,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ActionsSliceProducts.cleanProductStore, () => INITIAL_STATE)
      .addCase(ActionsSliceProducts.cleanProductDetails, (state) => {
        state.productDetails = INITIAL_STATE.productDetails;
      })
      .addCase(FetchersSliceProducts.getProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        FetchersSliceProducts.getProductList.fulfilled,
        (state, action) => {
          state.loading = false;
          state.productList = action.payload;
        },
      )
      .addCase(FetchersSliceProducts.getProductList.rejected, (state) => {
        state.loading = false;
        state.productList = [];
      })

      .addCase(FetchersSliceProducts.getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        FetchersSliceProducts.getProductDetails.fulfilled,
        (state, action) => {
          state.loading = false;
          state.productDetails = action.payload;
        },
      )
      .addCase(FetchersSliceProducts.getProductDetails.rejected, (state) => {
        state.loading = false;
        state.productDetails = {};
      });
  },
});

export default ReducerSliceProducts.reducer;
