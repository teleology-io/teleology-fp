const { toss } = require('../src/toss');

it('toss throws a generic message', () => {
  expect(toss).toThrow('An unknown error occured');
});

it('throws a curried message', () => {
  const f = () => toss('custom message');
  expect(f).toThrow('custom message');
});
