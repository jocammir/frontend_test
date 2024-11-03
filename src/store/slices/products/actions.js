import { createAction } from "@reduxjs/toolkit";
import { NAME_SLICE_PRODUCTS } from "./namespace";

export const ActionsSliceProducts = {
  cleanProductStore: createAction(`${NAME_SLICE_PRODUCTS}/cleanProductStore`),
  cleanProductDetails: createAction(
    `${NAME_SLICE_PRODUCTS}/cleanProductDetails`,
  ),
};
