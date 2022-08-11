const { episodesWithLocationsSkeleton } = require('../../src/requests/mock/outputs');
const linker = require('../../src/usecase/linker');

describe('Linker join usecase', () => {
  test('should return episodes with locations', async () => {
    expect(await linker()).toStrictEqual(episodesWithLocationsSkeleton);
  });
});
