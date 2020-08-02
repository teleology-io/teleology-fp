const { curry } = require('../src/curry');

it('stores curried values', () => {
  curry((a, b, c) => {
    expect([a, b, c]).toEqual(1, 2, 3);
  })(1, 2, 3);
});
