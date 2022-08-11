const data = {
  excercise_name: 'Char counter',
  time: 0,
  in_time: false,
  results: [
    { char: 'l', count: 0, resource: 'location' },
    { char: 'e', count: 0, resource: 'episode' },
    { char: 'c', count: 4, resource: 'character' },
  ],
};

const location = { char: 'l', count: 0, resource: 'location' };
const episode = { char: 'e', count: 0, resource: 'episode' };
const character = { char: 'c', count: 4, resource: 'character' };

module.exports = { data, location, episode, character };
