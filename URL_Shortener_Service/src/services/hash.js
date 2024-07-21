export const hashToBase62 = (id) => {
  if (id === 0) return "0";
  const dictionary =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hash = "";
  while (id != 0) {
    hash = dictionary[id % 62] + hash;
    id = Math.floor(id / 62);
  }
  return hash;
};
