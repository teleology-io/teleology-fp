export const toss = (msg: string) => (properties = {}) => {
  const e = new Error(msg || 'An unknown error occured');

  Object.assign(e, properties);
  throw e;
};
