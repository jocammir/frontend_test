/**
 * Filters a list of products based on a search term.
 *
 * @param {Array} items - The list of products to filter.
 * @param {string} searchTerm - The search term used to filter the products.
 * @returns {Array} - A new array containing the products that match the search term.
 *                   If no search term is provided, the complete list is returned.
 */
export const filterProducts = (items, searchTerm) => {
  if (!searchTerm) return items;

  return items.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.model.toLowerCase().includes(searchTerm.toLowerCase()),
  );
};
