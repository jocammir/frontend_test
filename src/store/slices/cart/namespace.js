import { getItem } from "../../storage";

export const NAME_SLICE_CART = "cart";

export const INITIAL_STATE = {
  cart: getItem(NAME_SLICE_CART).cart,
  cartParams: {},
  loading: false,
  lastFetched: undefined,
};
