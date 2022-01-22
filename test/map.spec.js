const { map } = require('../src/map');

it('maps using built-in pick', () => {
  const res = map(['name'])([
    {
      id: '1',
      name: 'Sirc',
    },
    {
      id: '2',
      name: 'Bob',
    },
  ]);

  expect(res).toEqual([
    {
      name: 'Sirc',
    },
    {
      name: 'Bob',
    },
  ]);
});

it('map returns empty objects for missing values', () => {
  const res = map(['rid'])([
    {
      id: '1',
      name: 'Sirc',
    },
    {
      id: '2',
      name: 'Bob',
    },
  ]);

  expect(res).toEqual([{}, {}]);
});

it('maps an array correctly', () => {
  const res = map((v) => v.id)([
    {
      id: '1',
    },
    {
      id: '2',
    },
  ]);

  expect(res).toEqual(['1', '2']);
});

it('if an object, map single item', () => {
  const res = map((v) => v.id)({
    id: 'single',
  });

  expect(res).toEqual('single');
});

it('returns undefined if no src provided', () => {
  const res = map((v) => v.id)();

  expect(res).not.toBeDefined();
});
