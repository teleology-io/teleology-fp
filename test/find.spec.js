const { find } = require('../src/find');

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

it('find using fn', () => {
  const res = find((it) => it.id === '1')(data);

  expect(res).toEqual(data[0]);
});

it('find using object', () => {
  const res = find({ id: '1' })(data);

  expect(res).toEqual(data[0]);
});

it('complex map find', () => {
  const res = find({ 'settings.notifications': true })(data);

  expect(res).toEqual(data[1]);
});

it('no values found', () => {
  const res = find({ 'contact.phone': '222-555-5555' })(data);

  expect(res).not.toBeDefined();
});
