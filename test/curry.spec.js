const { curry } = require('../src/curry');

it('stores curried values', () => {
  curry(3, (a, b, c) => {
    expect([a, b, c]).toEqual([1, 2, 3]);
  })(1, 2, 3);
});

it('allows n number of args', () => {
  const curried = curry(3, (a, b, c) => {
    expect(a).toEqual('one');
    expect(b).toEqual('two');
    expect(c).toEqual('three');
  });

  curried('one')('two', 'three');
  curried('one')('two')('three');
  curried('one', 'two')('three');
});
