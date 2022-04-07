import { pipe } from './pipe';
import { Chainable } from './types';

export const compose = (...fn: Chainable[]) => pipe(...fn.reverse());
