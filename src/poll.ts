/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
import { sleep } from './timeout';
import { AsyncFunction } from './types';

const DEFAULT_ROLLOFF = async (ms = 200) => sleep(ms);

export const poll = (fn: AsyncFunction, it?: Function | number) => {
  let rolloff;
  if (typeof it === 'function') {
    rolloff = it;
  } else if (typeof it === 'number') {
    rolloff = async () => DEFAULT_ROLLOFF(it);
  } else {
    rolloff = async () => DEFAULT_ROLLOFF();
  }

  let is_cancelled = false;

  (async () => {
    let i = 0;
    while (!is_cancelled) {
      await fn();
      await rolloff((i += 1));
    }
  })();

  return () => {
    is_cancelled = true;
  };
};
