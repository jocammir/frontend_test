import { NAME_SLICE_CART } from "./namespace";
import ReducerSliceCart from "./reducers";

export * from "./namespace";
export * from "./selectors";
export * from "./reducers";
export * from "./fetchers";
export * from "./actions";

export const SliceCart = { [NAME_SLICE_CART]: ReducerSliceCart };
