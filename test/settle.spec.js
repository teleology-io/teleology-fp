const { settle } = require('../src/settle');

it('settles an error promise', async () => {
  const caller = settle(async () => {
    throw new Error('nope');
  });

  expect(await caller()).toMatchObject({
    success: false,
    reason: expect.any(Error),
  });
});

it('settles an success promise', async () => {
  const result = await settle(async (name) => `hello ${name}`)('greg');

  expect(result).toMatchObject({
    success: true,
    value: 'hello greg',
  });
});

it('settles an array of promises', async () => {
  const ps = Array(5)
    .fill('')
    .map((a, i) => async () => i);

  const result = await settle(ps.map((it) => it()));

  expect(result).toEqual([
    { success: true, value: 0 },
    { success: true, value: 1 },
    { success: true, value: 2 },
    { success: true, value: 3 },
    { success: true, value: 4 },
  ]);
});
