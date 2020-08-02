export const map = (fn) => (src) =>
  Array.isArray(src) ? src.map(fn) : src ? fn(src, 0, src) : undefined;
