export const SelectorSliceProducts = {
  loading: ({ products }) => products.loading,
  productList: ({ products }) => products.productList,
  productDetails: ({ products }) => products.productDetails || {},
};
