import { API_URL } from "../api";

export async function fetchProductList() {
  const response = await fetch(`${API_URL}/product`);
  if (!response.ok) {
    throw new Error("Failed to fetch product list");
  }
  return await response.json();
}

export async function fetchProductDetails(id) {
  const response = await fetch(`${API_URL}/product/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  return await response.json();
}
