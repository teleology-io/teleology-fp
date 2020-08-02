import { pipe } from './pipe';

export const compose = (...fn) => pipe(...fn.reverse());
