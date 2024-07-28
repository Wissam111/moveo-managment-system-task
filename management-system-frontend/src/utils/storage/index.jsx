export const storeData = (key, value) => {
  if (typeof window === undefined) {
    return null;
  }
  localStorage?.setItem(key, JSON.stringify(value));
};

export const getData = (key) => {
  if (typeof window === undefined) {
    return null;
  }
  const dataJSON = localStorage?.getItem(key);
  return dataJSON ? JSON.parse(dataJSON) : null;
};
