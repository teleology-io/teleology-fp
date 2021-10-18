const { poll } = require('../src/poll');
const { sleep } = require('../src/timeout');

it('Sleeps every 200 ms with no rolloff provided', async () => {
  const fn = jest.fn();

  const cancel = poll(fn);
  await sleep(1000);
  cancel();

  expect(fn).toHaveBeenCalledTimes(5);
});

it('Set poll time works accurately', async () => {
  const fn = jest.fn();

  const cancel = poll(fn, 500);
  await sleep(1000);
  cancel();

  expect(fn).toHaveBeenCalledTimes(2);
});

it('Handles custom rolloff functions', async () => {
  const fn = jest.fn();

  const linear = async (i) => new Promise((res) => setTimeout(res, i * 1000));

  const cancel = poll(fn, linear);
  await sleep(10000);
  cancel();

  expect(fn).toHaveBeenCalledTimes(4);
}, 15000);
