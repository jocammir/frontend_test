import { NAME_SLICE_TOAST } from "./namespace";
import ReducerSliceToast from "./reducers";

export * from "./namespace";
export * from "./selectors";
export * from "./reducers";
export * from "./actions";

export const SliceToast = { [NAME_SLICE_TOAST]: ReducerSliceToast };
