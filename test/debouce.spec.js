const { debounce } = require('../lib/debounce');

it('debounces properly - leading', async () => {
  const fn = jest.fn();
  const it = debounce(fn, { timeout: 600, leading: true });

  it();
  it();
  it();

  await new Promise((re) => setTimeout(re, 700));

  it();

  expect(fn).toHaveBeenCalledTimes(2);
});

it('debounces properly', async () => {
  const fn = jest.fn();
  const it = debounce(fn, { timeout: 600 });

  it();
  it();
  it();

  await new Promise((re) => setTimeout(re, 600));

  it();

  expect(fn).toHaveBeenCalledTimes(1);
});


