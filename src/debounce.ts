


export function debounce(func: Function, { timeout = 300, leading = false}: {
  timeout?: number,
  leading?: boolean
}){
  let timer: any;
  if (leading) {
    return (...args: any[]) => {
      if (!timer) func.apply(func, args);

      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = undefined;
      }, timeout);
    }
  }

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(func, args); }, timeout);
  };
}
