/* eslint-disable no-nested-ternary */
const thennable = (v) =>
  (v && v.then && typeof v.then === 'function') ||
  (v && v[Symbol.toStringTag] === 'AsyncFunction');

const settleOne = (it) =>
  thennable(it)
    ? it.then(
        (x) => ({ success: true, value: x }),
        (e) => ({ success: false, reason: e }),
      )
    : typeof it === 'function'
    ? it()
    : it;

export const settle = (it) =>
  typeof it === 'function'
    ? async (...args) => settleOne(it(...args))
    : Promise.all(it.map(settleOne));
