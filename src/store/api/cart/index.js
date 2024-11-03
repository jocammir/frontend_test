import { API_URL } from "../api";

export const updateCart = async (productData) => {
  const response = await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("Failed to update cart");
  }

  return await response.json();
};
