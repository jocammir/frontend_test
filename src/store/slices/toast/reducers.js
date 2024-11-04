import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE, NAME_SLICE_TOAST } from "./namespace";
import { ActionsSliceToast } from "./actions";

const ReducerSliceToast = createSlice({
  name: NAME_SLICE_TOAST,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ActionsSliceToast.cleanCartStore, () => INITIAL_STATE)
      .addCase(ActionsSliceToast.showToast, (state, action) => {
        state.open = true;
        state.message = action.payload.message;
        state.severity = action.payload.severity;
      })
      .addCase(ActionsSliceToast.hideToast, (state) => {
        state.open = false;
        state.message = INITIAL_STATE.message;
      });
  },
});

export default ReducerSliceToast.reducer;
