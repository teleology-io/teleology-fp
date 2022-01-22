const { pick } = require('./pick');

export const map = (arg) => (src) => {
  let fn = arg;
  if (Array.isArray(arg)) {
    fn = pick(arg);
  }
  return Array.isArray(src) ? src.map(fn) : src ? fn(src, 0, src) : undefined;
};
