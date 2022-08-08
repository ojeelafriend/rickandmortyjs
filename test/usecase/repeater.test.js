const mock = require('../../src/requests/mock/character');
const repeater = require('../../src/usecase/repeater');

describe('Counter char usecase', () => {
  test('should return one number only char exists', async () => {
    const numberOfChar = await repeater({ char: mock.char, entity: mock.entity });

    expect(numberOfChar).toBe(mock.repetitions);
  });
});
