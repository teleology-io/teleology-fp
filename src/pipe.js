const isPromise = (v) => v && v.then && typeof v.then === 'function';

export const pipe = (...fn) => (initial) =>
  fn.reduce((a, n) => (isPromise(n) ? n.then(a) : n(a)), initial);
