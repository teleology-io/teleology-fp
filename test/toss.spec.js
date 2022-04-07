const { toss } = require('../lib/toss');

it('toss throws a generic message', () => {
  expect(toss('An unknown error occured')).toThrow('An unknown error occured');
});

it('throws a curried message', () => {
  try {
    toss('custom message')({ code: 500 });
  } catch (e) {
    expect(e.message).toBe('custom message');
    expect(e.code).toBe(500);
  }
});
