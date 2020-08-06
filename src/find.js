export const find = (fn) => (src) =>
  Array.isArray(src) ? src.find(fn) : undefined;
