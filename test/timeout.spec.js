const { timeout, sleep } = require('../lib/timeout');

it('times out correctly', async () => {
  const sleeper = async () => sleep(300, 'fake');

  await expect(timeout(sleeper, 100)()).rejects.toThrow(
    'Function sleeper timed out',
  );
});

it('returns in time', async () => {
  const sleeper = async () => sleep(100, 'fake');

  await expect(timeout(sleeper, 600)()).resolves.toEqual('fake');
});
