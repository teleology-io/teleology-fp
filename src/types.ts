
export type Iterable = {
  [key: string | number | symbol]: any
};

export type Equalizer = (v: any, i: number) => boolean;

export type AsyncFunction = (...args: any) => Promise<any>

export type Chainable = Promise<any> | AsyncFunction | Function | any