const { dot } = require('../lib/dot');

it('parses paths correctly', () => {
  expect(dot('[0].1.a.c')).toEqual(['0', '1', 'a', 'c']);

  expect(dot('1.2.3.4')).toEqual(['1', '2', '3', '4']);

  expect(dot('b.c.d.s')).toEqual(['b', 'c', 'd', 's']);
});
