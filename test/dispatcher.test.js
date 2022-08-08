const mock = require('../src/requests/mock/finalResult');
const dispatcher = require('../src/dispatcher');

describe('Dispatch counter', () => {
  test('should return integration the suppliers (counter with packer build)', async () => {
    let start = Date.now();

    const result = await dispatcher.dispatchCounter();

    let end = Date.now();

    const duration = end - start;

    mock.data.time = `${duration}ms`;
    mock.data.in_time = duration < 3000;

    expect(result).toStrictEqual(mock.data);
  });
});
