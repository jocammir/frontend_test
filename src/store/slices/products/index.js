import { NAME_SLICE_PRODUCTS } from "./namespace";
import ReducerSliceProducts from "./reducers";

export * from "./namespace";
export * from "./selectors";
export * from "./reducers";
export * from "./fetchers";
export * from "./actions";

export const SliceProducts = { [NAME_SLICE_PRODUCTS]: ReducerSliceProducts };
