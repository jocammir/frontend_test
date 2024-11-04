import { API_URL } from "../api";
import { getItem } from "../../storage";
import { NAME_SLICE_CART } from "../../slices/cart";
import { ActionsSliceToast } from "../../slices/toast";

export const updateCart = async (productData, { dispatch }) => {
  const response = await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    dispatch(
      ActionsSliceToast.showToast({
        message:
          "There was an error adding the product to the cart. Please try again.",
        severity: "error",
      }),
    );
    throw new Error("Failed to update cart");
  }

  dispatch(
    ActionsSliceToast.showToast({
      message: "Product successfully added to cart!",
      severity: "success",
    }),
  );
  return await response.json();
};

export const revalidationCart = () => {
  const storedData = getItem(NAME_SLICE_CART);
  const { cart, cartParams, lastFetched } = storedData;
  const expirationTime = process.env.PREACT_APP_STORAGE_EXPIRATION_TIME;

  if (cart) {
    const currentTime = Date.now();

    if (currentTime - lastFetched > expirationTime) {
      return cartParams;
    }
  }

  return null;
};
