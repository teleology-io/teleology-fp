import { Equalizer, Iterable } from "./types";

import { objecToEquality } from "./arrays";

export const find = (arg: Equalizer) => (src: Iterable) => {
  let fn = arg;
  if (typeof fn !== 'function') {
    fn = objecToEquality(arg);
  }
  return Array.isArray(src) ? src.find(fn) : undefined;
};
