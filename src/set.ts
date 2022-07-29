import { curry } from "./curry";
import { dot } from "./dot"
import { Iterable } from './types';

export const set = (path: string, value: any, src?: Iterable): Iterable => {
  if (!src) return (src: Iterable): Iterable => set(path, value, src)

  const paths = dot(path)
    
  return paths.reduce((current: Iterable, subpath: string, index: number) => {
    if (index === paths.length - 1) {
      current[subpath] = value
      // last path return src
      return src
    }

    if (!current[subpath]) {
      const nextSubPath = paths[index + 1]
      // we need to look ahead at what we are expecting, an array index or
      // object key
      current[subpath] = nextSubPath && /\d+/.test(nextSubPath) ? [] : {}
    }

    // traverse to next
    return current[subpath]
  }, src)
}