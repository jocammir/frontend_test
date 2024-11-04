import { EMPTY_STRING } from "../../../utils/constants";

export const NAME_SLICE_TOAST = "toast";

export const INITIAL_STATE = {
  autoHideDuration: 6000,
  open: false,
  message: EMPTY_STRING,
  severity: "error",
  vertical: "top",
  horizontal: "center",
};
