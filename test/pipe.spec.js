const { pipe } = require('../lib/pipe');

it('pipes from one function to another', async () => {
  const func1 = () => 3;
  const func2 = (given) => given + 3;
  const func3 = async (given) => given * 3;
  const func4 = async (given) => given;

  const result = await pipe(func1, func2, func3, func4)();

  expect(result).toEqual(18);
});
