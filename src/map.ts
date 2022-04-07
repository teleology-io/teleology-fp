import { Equalizer, Iterable } from "./types";
import { pick } from "./pick";

export const map = (arg: Equalizer) => (src: Iterable) => {
  let fn = arg;
  if (Array.isArray(arg)) {
    fn = pick(arg);
  }
  return Array.isArray(src) ? src.map(fn) : src ? fn(src, 0) : undefined;
};
