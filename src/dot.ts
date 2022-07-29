
export const dot = (path: string): string[] => {
  const LEADING_ARRAY = /\[/g;
  const TRAILING_ARRAY = /^\[|\]/g;
  return path.replace(TRAILING_ARRAY, '').replace(LEADING_ARRAY, '.').split('.');
}
  
