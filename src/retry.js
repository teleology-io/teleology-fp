export const retry = (fn, max) => async (...args) => {
  for (let i = max - 1; i > -1; i -= 1) {
    try {
      // eslint-disable-next-line no-await-in-loop
      return await fn(...args);
    } catch (e) {
      if (!i) {
        throw e;
      }
    }
  }
};

export const retrySync = (fn, max = 3) => (...args) => {
  for (let i = max - 1; i > -1; i -= 1) {
    try {
      return fn(...args);
    } catch (e) {
      if (!i) {
        throw e;
      }
    }
  }
};
