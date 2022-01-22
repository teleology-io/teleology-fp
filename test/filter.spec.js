const { filter } = require('../src/filter');

const data = [
  {
    id: '1',
    name: 'Sirc',
    settings: {
      theme: 'dark',
      notifications: false,
    },
    contact: {
      phone: '555-555-5555',
    },
  },
  {
    id: '2',
    name: 'Bob',
    settings: {
      theme: 'default',
      notifications: true,
    },
    contact: {
      phone: '5555555',
    },
  },
];

it('filter using fn', () => {
  const res = filter((it) => it.id === '1')(data);

  expect(res).toEqual([data[0]]);
});

it('filter using object', () => {
  const res = filter({ id: '1' })(data);

  expect(res).toEqual([data[0]]);
});

it('complex map filter', () => {
  const res = filter({ 'settings.notifications': true })(data);

  expect(res).toEqual([data[1]]);
});

it('no values found', () => {
  const res = filter({ 'contact.phone': '222-555-5555' })(data);

  expect(res).toEqual([]);
});
