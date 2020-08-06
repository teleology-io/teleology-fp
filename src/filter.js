export const filter = (fn) => (src) =>
  Array.isArray(src) ? src.filter(fn) : [];
