/* eslint-disable no-await-in-loop */

const DEFAULT_ROLLOFF = async () => {};

export const retry = (fn, max = 3, rolloff = DEFAULT_ROLLOFF) => async (
  ...args
) => {
  for (let i = 0; i < max; i += 1) {
    try {
      return await fn(...args);
    } catch (e) {
      if (i + 1 >= max) {
        throw e;
      }

      await rolloff(i + 1);
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
