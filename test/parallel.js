const { parallel } = require('../lib/parallel');

it('emits to all listeners', async () => {
  const a = jest.fn();
  const b = jest.fn();

  await parallel(a, b)('hello');

  expect(a).toHaveBeenCalledWith('hello');
  expect(b).toHaveBeenCalledWith('hello');
});
