export const parallel = (...fns) => (...args) =>
  Promise.all(fns.map((fn) => fn(...args)));
