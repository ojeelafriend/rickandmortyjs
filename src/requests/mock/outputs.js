const initialInfo = {
  exercise_name: '',
  time: 0,
  in_time: false,
  results: undefined,
};

const counterSkeleton = {
  location: { char: 'l', count: 0, resource: 'location' },
  episode: { char: 'e', count: 0, resource: 'episode' },
  character: { char: 'c', count: 4, resource: 'character' },
};

const episodesWithLocationsSkeleton = [
  {
    name: 'Pilot',
    episode: 'S01E01',
    locations: ['Earth (C-137)', 'unknown', 'Bepis 9', 'Gromflom Prime', 'Girvonesk'],
  },
];

module.exports = { initialInfo, counterSkeleton, episodesWithLocationsSkeleton };
