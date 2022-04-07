import { Chainable } from "./types";

/* eslint-disable no-nested-ternary */
const thennable = (v: any) =>
  (v && v.then && typeof v.then === 'function') ||
  (v && v[Symbol.toStringTag] === 'AsyncFunction');

const settleOne = (it: any) =>
  thennable(it)
    ? it.then(
        (x: any) => ({ success: true, value: x }),
        (e: Error) => ({ success: false, reason: e }),
      )
    : typeof it === 'function'
    ? it()
    : it;

export const settle = (it: Array<Chainable> | Function) =>
  typeof it === 'function'
    ? async (...args: any[]) => settleOne(it(...args))
    : Promise.all(it.map(settleOne));
