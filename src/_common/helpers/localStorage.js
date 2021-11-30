export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveLocalStorate(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const setTokenLocalStorage = (token) => {
  saveLocalStorate("tokenApp", token);
};

export const getTokenLocalStorage = () => {
  return getLocalStorage("tokenApp");
};

export const deleteTokenLocalStorage = () => {
  localStorage.removeItem("tokenApp");
};
