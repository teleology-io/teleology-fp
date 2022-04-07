const { some } = require('../lib/some');

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

it('some using fn', () => {
  const res = some((it) => it.id === '1')(data);

  expect(res).toBeTruthy();
});

it('some using object', () => {
  const res = some({ id: '1' })(data);

  expect(res).toBeTruthy();
});

it('complex map some', () => {
  const res = some({ 'settings.notifications': true })(data);

  expect(res).toBeTruthy();
});

it('no values found', () => {
  const res = some({ 'contact.phone': '222-555-5555' })(data);

  expect(res).toBeFalsy();
});
