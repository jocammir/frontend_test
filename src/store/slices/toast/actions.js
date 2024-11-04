import { createAction } from "@reduxjs/toolkit";

import { NAME_SLICE_TOAST } from "./namespace";

export const ActionsSliceToast = {
  cleanCartStore: createAction(`${NAME_SLICE_TOAST}/cleanCartStore`),
  showToast: createAction(`${NAME_SLICE_TOAST}/showToast`),
  hideToast: createAction(`${NAME_SLICE_TOAST}/hideToast`),
};
