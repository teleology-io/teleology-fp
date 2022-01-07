const { pick, get } = require('../src/pick');

const TEST_DATA = {
  a: {
    b: ['2', '3', 'z'],
  },
};

const TEST_DEFAULT_VALUE = 'not_found';

describe('get', () => {
  it('accurately get the value', () => {
    expect(get('a.b[2]')(TEST_DATA)).toEqual('z');
  });

  it('uses default if not found', () => {
    expect(get('c[1]', TEST_DEFAULT_VALUE)(TEST_DATA)).toEqual(
      TEST_DEFAULT_VALUE,
    );
  });

  it('uses undefined if not found', () => {
    expect(get('c[1]')(TEST_DATA)).not.toBeDefined();
  });
});

describe('pick', () => {
  it('accurately pick the values', () => {
    expect(pick(['a.b[0]', 'a.b[2]'])(TEST_DATA)).toEqual({
      a: {
        b: ['2', undefined, 'z'],
      },
    });
  });

  it('handles array', () => {
    expect(pick(['0', '2'])([{ foo: 'bar' }, 12, undefined])).toEqual([
      { foo: 'bar' },
      undefined,
      undefined,
    ]);
  });

  it('handles array - cleaned', () => {
    expect(
      pick(['0', '2'], { clean: true })([{ foo: 'bar' }, 12, undefined]),
    ).toEqual([{ foo: 'bar' }]);
  });

  it('optional settings', () => {
    expect(
      pick(['a.b[0]', 'a.b[2]'], { clean: true })(TEST_DATA),
    ).toMatchObject({
      a: {
        b: ['2', 'z'],
      },
    });
  });

  it('uses empty object if not found', () => {
    expect(pick(['c[1]'])(TEST_DATA)).toEqual({});
  });
});
