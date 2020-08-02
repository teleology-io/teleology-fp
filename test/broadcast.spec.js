const { broadcast } = require('../src/broadcast');

it('emits to all listeners', async () => {
  const a = jest.fn();
  const b = jest.fn();

  await broadcast(a, b)('hello');

  expect(a).toHaveBeenCalledWith('hello');
  expect(b).toHaveBeenCalledWith('hello');
});
