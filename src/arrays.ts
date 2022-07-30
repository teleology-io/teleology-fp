import { get } from './pick';
import { Iterable } from './types';

export const objecToEquality = (obj: Iterable) => (src: any) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (get(key, undefined, src) !== obj[key]) {
      return false;
    }
  }
  return true;
};
