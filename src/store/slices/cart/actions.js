import { createAction } from "@reduxjs/toolkit";

import { NAME_SLICE_CART } from "./namespace";

export const ActionsSliceCart = {
  cleanCartStore: createAction(`${NAME_SLICE_CART}/cleanCartStore`),
  setCartParams: createAction(`${NAME_SLICE_CART}/setCartParams`),
};
