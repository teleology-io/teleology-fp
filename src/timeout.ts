export const sleep = (millis: number, ...params: any[]) =>
  new Promise((resolve) => setTimeout(resolve, millis, ...params));

// Create an alias for Promise.race
export const { race } = Promise;

export const timeout = (fn: Function, millis = 500) => (...args: any[]) =>
  Promise.race([sleep(millis, 'timeout'), fn(...args)]).then((result) => {
    if (result === 'timeout') {
      throw new Error(`Function ${fn.name || 'Anonymous'} timed out`);
    }

    return result;
  });
