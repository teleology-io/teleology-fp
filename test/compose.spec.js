const { compose } = require('../src/compose');

it('composes from one function to another', async () => {
  const func1 = () => 3;
  const func2 = (given) => given + 3;
  const func3 = async (given) => given * 3;
  const func4 = async (given) => given;

  const result = await compose(func4, func3, func2, func1)();

  expect(result).toEqual(18);
});
