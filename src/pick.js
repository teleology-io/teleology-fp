import { dot } from './dot';

export const pick = (path, def) => (obj) => {
  try {
    return dot(path).reduce((a, b) => a[b], obj);
  } catch (e) {
    return def;
  }
};
