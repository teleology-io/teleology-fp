const { pick } = require('../src/pick');

const TEST_DATA = {
  a: {
    b: ['2', '3', 'z'],
  },
};

const TEST_DEFAULT_VALUE = 'not_found';

it('accurately picks the value', () => {
  expect(pick('a.b[2]')(TEST_DATA)).toEqual('z');
});

it('uses default if not found', () => {
  expect(pick('c[1]', TEST_DEFAULT_VALUE)(TEST_DATA)).toEqual(
    TEST_DEFAULT_VALUE,
  );
});

it('uses undefined if not found', () => {
  expect(pick('c[1]')(TEST_DATA)).not.toBeDefined();
});
