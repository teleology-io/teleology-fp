const { retry, retrySync } = require('../lib/retry');

it('retries async functions 3 times', async () => {
  const func1 = jest.fn(async () => {
    throw new Error('nope');
  });

  const wrapped = retry(func1, 3);

  try {
    await wrapped('hello');
  } catch (e) {
    expect(func1).toHaveBeenCalledTimes(3);
    expect(e).toMatchObject({
      message: 'nope',
    });
  }
});

it('retries sync functions 3 times', async () => {
  const func1 = jest.fn(() => {
    throw new Error('still!');
  });

  const wrapped = retrySync(func1, 3);

  try {
    wrapped('hello');
  } catch (e) {
    expect(func1).toHaveBeenCalledTimes(3);
    expect(e).toMatchObject({
      message: 'still!',
    });
  }
});

it('success after first retry - async', async () => {
  let i = 0;
  const func1 = jest.fn(async () => {
    if (i === 1) return 'sure';
    i += 1;
    throw new Error('nope');
  });

  const result = await retry(func1, 3)('wanna go?');

  expect(func1).toHaveBeenCalledTimes(2);
  expect(result).toEqual('sure');
});

it('success after second retry - sync', async () => {
  let i = 0;
  const func1 = jest.fn(() => {
    if (i > 1) return 'blue';
    i += 1;
    throw new Error('green');
  });

  const result = retrySync(func1, 3)('env');

  expect(func1).toHaveBeenCalledTimes(3);
  expect(result).toEqual('blue');
});
