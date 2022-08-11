const buildCounter = (location, episode, character) => {
  return {
    excercise_name: 'Char counter',
    time: 0,
    in_time: false,
    results: [location, episode, character],
  };
};


const buildEpisodes = (episodeWithLocations) => {
  return {
    excercise_name: 'Episode locations',
    time: 0,
    in_time: false,
    results: episodeWithLocations,
  };
};

module.exports = { buildCounter, buildEpisodes };

