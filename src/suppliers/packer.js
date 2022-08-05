const buildCounter = (location, episode, character) => {
  return {
    excercise_name: 'Char counter',
    time: 0,
    in_time: false,
    results: [location, episode, character],
  };
};

module.exports = { buildCounter };
