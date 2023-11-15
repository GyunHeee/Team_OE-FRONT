export const getToken = (key) => {
  const token = localStorage.getItem(key);

  return token && JSON.parse(token);
};

export const setToken = ({ key, value }) => {
  if (!value) return;

  localStorage.setItem(key, JSON.stringify(value));
};
