
export type Iterable = {
  [key: string | number]: any
};

export type Equalizer = (v: any, i: number) => boolean | Object;

export type AsyncFunction = (...any: any[]) => Promise<any>

export type Chainable = AsyncFunction | Function;