const data = {
  results: [
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'unknown', url: '' },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/28'],
      url: 'https://rickandmortyapi.com/api/character/8',
      created: '2017-11-04T20:03:34.737Z',
    },
  ],
};

const standardChar = 2;

const char = 'c';

const entity = 'character';

module.exports = { data, char, standardChar, entity };
