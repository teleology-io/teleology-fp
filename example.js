const { timeout } = require('./lib');

const timed = timeout(
  async () => new Promise((resolve) => setTimeout(resolve, 9000)), // long running task
  200, // timeout
);

timed('hello').then(console.log).catch(console.log);
