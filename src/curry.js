export const curry = (arity = 0, fn) => (...args) => {
  // we have surpassed the expected arity, so invoke the final function
  if (arity <= args.length) {
    return fn(...args);
  }

  // we still have args we can bind, recurse
  const bound = fn.bind(fn, ...args);
  return curry(arity - args.length, bound);
};
