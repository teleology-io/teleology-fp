import { Chainable } from "./types";

/* eslint-disable no-plusplus */
export const nonce = (fn: Chainable, times = 1) => {
  let i = 0;
  return (...args: any[]) => (i++ <= times - 1 ? fn(...args) : undefined);
};

export const once = (fn: Chainable) => nonce(fn);
