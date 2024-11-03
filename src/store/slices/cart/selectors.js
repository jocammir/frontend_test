export const SelectorSliceCart = {
  loading: ({ cart }) => cart.loading,
  cart: ({ cart }) => cart.cart,
  cartCount: ({ cart }) => cart.cart?.count,
};
