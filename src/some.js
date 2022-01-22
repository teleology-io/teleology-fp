const { objecToEquality } = require('./arrays');

export const some = (arg) => (src) => {
  let fn = arg;
  if (typeof fn !== 'function') {
    fn = objecToEquality(arg);
  }
  return Array.isArray(src) ? src.some(fn) : false;
};
