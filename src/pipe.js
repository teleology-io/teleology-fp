export const thennable = (v) =>
  (v && v.then && typeof v.then === 'function') ||
  (v && v[Symbol.toStringTag] === 'AsyncFunction');

export const pipe = (...fn) => (initial) =>
  fn.reduce((a, n) => (thennable(a) ? a.then(n) : n(a)), initial);
