export const isAsyncFunction = (v) =>
  (v && v.then && typeof v.then === 'function') ||
  (v && v[Symbol.toStringTag] === 'AsyncFunction');

export const pipe = (...fn) => (initial) =>
  fn.reduce((a, n) => (isAsyncFunction(n) ? n.then(a) : n(a)), initial);
