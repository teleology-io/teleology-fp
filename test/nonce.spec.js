const { once } = require('../lib/nonce');

it('only calls one time', () => {
  const test = jest.fn();

  const gated = once(test);

  gated('1');
  gated('2');

  expect(test).toHaveBeenCalledWith('1');
  expect(test).toHaveBeenCalledTimes(1);
});
