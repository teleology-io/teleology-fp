import { Chainable } from "./types";

export const parallel = (...fns: Chainable[]) => (...args: any[]) =>
  Promise.all(fns.map((fn) => fn(...args)));
