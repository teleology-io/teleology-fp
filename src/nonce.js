/* eslint-disable no-plusplus */
export const nonce = (fn, times = 1) => {
  let i = 0;
  return (...args) => (i++ <= times - 1 ? fn(...args) : undefined);
};

export const once = (fn) => nonce(fn);
