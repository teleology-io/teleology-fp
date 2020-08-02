const LEADING_ARRAY = /\[/g;
const TRAILING_ARRAY = /^\[|\]/g;

export const dot = (path) =>
  path.replace(TRAILING_ARRAY, '').replace(LEADING_ARRAY, '.').split('.');
