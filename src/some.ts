import { objecToEquality } from "./arrays";
import type { Equalizer } from "./types";

export const some = (arg: Equalizer) => (src: Array<any>) => {
  let fn = arg;
  if (typeof fn !== 'function') {
    fn = objecToEquality(arg);
  }
  return Array.isArray(src) ? src.some(fn) : false;
};
