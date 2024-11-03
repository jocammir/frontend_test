export const setItem = (key, payload) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key)) || {};
};
