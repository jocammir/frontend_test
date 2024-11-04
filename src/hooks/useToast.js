import { useDispatch, useSelector } from "react-redux";
import { ActionsSliceToast, SelectorSliceToast } from "../store/slices/toast";

export const useToast = () => {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(SelectorSliceToast.toast);

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") return;
    dispatch(ActionsSliceToast.hideToast());
  };

  return {
    open,
    message,
    severity,
    onCloseToast: handleCloseToast,
  };
};
