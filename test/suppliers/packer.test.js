const mock = require('../../src/requests/mock/finalResult');
const packer = require('../../src/suppliers/packer');

describe('Build counter packer', () => {
  test('should return a exercise name, time, in_time and the results', () => {});
  const result = packer.buildCounter(mock.location, mock.episode, mock.character);

  expect(result).toStrictEqual(mock.data);
});
