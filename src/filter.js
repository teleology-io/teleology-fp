const { objecToEquality } = require('./arrays');

export const filter = (arg) => (src) => {
  let fn = arg;
  if (typeof fn !== 'function') {
    fn = objecToEquality(arg);
  }

  return Array.isArray(src) ? src.filter(fn) : [];
};
