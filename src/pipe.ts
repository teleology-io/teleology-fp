import { Chainable } from "./types";

export const thennable = (v: any) =>
  (v && v.then && typeof v.then === 'function') ||
  (v && v[Symbol.toStringTag] === 'AsyncFunction');

export const pipe = (...fn: Chainable[]) => (initial?: any) =>
  fn.reduce((a, n) => (thennable(a) ? a.then(n) : n(a)), initial);
