const api = process.env.PREACT_APP_API_URL;

export async function fetchProductList() {
  const response = await fetch(`${api}/product`);
  if (!response.ok) {
    throw new Error("Failed to fetch product list");
  }
  return await response.json();
}

export async function fetchProductDetails(id) {
  const response = await fetch(`${api}/product/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  return await response.json();
}
