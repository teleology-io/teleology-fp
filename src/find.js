const { objecToEquality } = require('./arrays');

export const find = (arg) => (src) => {
  let fn = arg;
  if (typeof fn !== 'function') {
    fn = objecToEquality(arg);
  }
  return Array.isArray(src) ? src.find(fn) : undefined;
};
