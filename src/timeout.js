export const sleep = (millis, ...params) =>
  new Promise((resolve) => setTimeout(resolve, millis, ...params));

// Create an alias for Promise.race
export const { race } = Promise;

export const timeout = (fn, millis = 500) => (...args) =>
  Promise.race([sleep(millis, 'timeout'), fn(...args)]).then((result) => {
    if (result === 'timeout') {
      throw new Error(`Function ${fn.name || 'Anonymous'} timed out`);
    }

    return result;
  });
