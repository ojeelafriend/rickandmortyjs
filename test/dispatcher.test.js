const { counterSkeleton, episodesWithLocationsSkeleton, initialInfo } = require('../src/requests/mock/outputs');
const dispatcher = require('../src/dispatcher');

describe('Dispatch counter', () => {
  test('should return integration the suppliers (counter with packer build)', async () => {
    const { location, episode, character } = counterSkeleton;

    const result = await dispatcher.dispatchCounter();

    initialInfo.excercise_name = 'Char counter';
    initialInfo.time = result.time;
    initialInfo.in_time = result.in_time;

    initialInfo.results = [location, episode, character];

    expect(result).toStrictEqual(initialInfo);
  });
});

describe('Dispatch episode locations', () => {
  test('should return integration the suppliers (packer build)', async () => {
    const result = await dispatcher.dispatchEpisode();

    initialInfo.excercise_name = 'Episode locations';
    initialInfo.time = result.time;
    initialInfo.in_time = result.in_time;

    initialInfo.results = episodesWithLocationsSkeleton;

    expect(result).toStrictEqual(initialInfo);
  });
});
