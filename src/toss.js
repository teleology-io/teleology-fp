export const toss = (msg) => {
  throw new Error(msg || 'An unknown error occured');
};
