export const setItem = (key, payload) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(key, JSON.stringify(payload));
  } else {
    console.warn("localStorage is not available");
  }
};

export const getItem = (key) => {
  if (typeof window !== "undefined" && window.localStorage) {
    return JSON.parse(localStorage.getItem(key)) || {};
  }
  console.warn("localStorage is not available");
  return {};
};
