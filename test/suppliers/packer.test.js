
const { counterSkeleton, initialInfo, episodesWithLocationsSkeleton } = require('../../src/requests/mock/outputs');

const packer = require('../../src/suppliers/packer');

describe('Build counter packer', () => {
  test('should return a exercise name, time, in_time and the results', () => {});

  const { location, episode, character } = counterSkeleton;

  const result = packer.buildCounter(location, episode, character);

  initialInfo.excercise_name = 'Char counter';
  initialInfo.results = [location, episode, character];

  expect(result).toStrictEqual(initialInfo);
});

describe('Build episodes with locations packer', () => {
  test('should return a exercise name, time, in_time and the results', () => {
    const result = packer.buildEpisodes(episodesWithLocationsSkeleton);

    initialInfo.excercise_name = 'Episode locations';
    initialInfo.results = episodesWithLocationsSkeleton;

    expect(result).toStrictEqual(initialInfo);
  });

});
