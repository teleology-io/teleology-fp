const { get } = require('./pick');

export const objecToEquality = (obj) => (src) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (get(key)(src) !== obj[key]) {
      return false;
    }
  }
  return true;
};
