import { dot } from './dot';
import { clean } from './clean';
import { Iterable } from './types';

export const get = (path: string, def?: any) => (obj: Iterable) => {
  try {
    return dot(path).reduce((a: any, b: any) => a[b], obj);
  } catch (e) {
    return def;
  }
};

export type PickOptions = {
  clean: boolean
}

export const pick = (paths: string[], options?: PickOptions) => (src: Iterable) => {
  const output = Array.isArray(src) ? [] : {};

  for (let j = 0; j < paths.length; j++) {
    const originalPath = paths[j];
    const path = dot(originalPath);
    const value = get(originalPath)(src);

    // don't try to find something that doesn't exist
    if (!path[0].match(/\d/g) && !src.hasOwnProperty(path[0])) {
      continue;
    }

    let target: Iterable = output;

    for (let i = 0; i < path.length; i++) {
      const part = path[i];
      const next = path[i + 1];

      // already defined and not at the end
      if (target[part]) {
        target = target[part];
        continue;
      }

      // next part is array
      if (next && next.match(/\d/g)) {
        target[part] = [];
        target = target[part];
        continue;
      }

      if (next) {
        target[part] = {};
        target = target[part];
      }
    }

    const last = path[path.length - 1];
    target[last] = value;
  }

  if (options && options.clean) {
    return clean(output);
  }

  return output;
};
