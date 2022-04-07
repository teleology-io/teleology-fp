import { Equalizer, Iterable } from "./types";

import { objecToEquality } from "./arrays";

export const filter = (arg: Equalizer) => (src: Iterable) => {
  let fn = arg;
  if (typeof fn !== 'function') {
    fn = objecToEquality(arg);
  }

  return Array.isArray(src) ? src.filter(fn) : [];
};
