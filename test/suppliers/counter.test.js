const counter = require('../../src/suppliers/counter');
const mock = require('../../src/requests/mock/character');

describe('Counter reaction in the skeleton return: ', () => {
  const skeleton = {
    char: mock.char,
    count: mock.repetitions,
    resource: mock.entity,
  };

  test('should return basic skeleton <char, count, resource> not undefined or null', async () => {
    const result = await counter({ char: mock.char, entity: mock.entity });

    expect(result).toStrictEqual(skeleton);
  });
});
