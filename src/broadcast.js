export const broadcast = (...fns) => (...args) =>
  Promise.all(fns.map((fn) => fn(...args)));
