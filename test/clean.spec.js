const { clean } = require('../lib/clean');

it('removes empty values', async () => {
  const src = {
    a: null,
    b: '',
    c: undefined,
    d: {},
    e: [],
    f: 'hello',

    nested: { will: { be: { removed: {} } } },
  };

  const result = clean(src);

  expect(result).toEqual({
    f: 'hello',
  });
});
