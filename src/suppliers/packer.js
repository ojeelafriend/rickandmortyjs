const buildInitialInfo = {
  excercise_name: '',
  time: 0,
  in_time: false,
  results: undefined,
};

const buildCounter = (location, episode, character) => {
  buildInitialInfo.excercise_name = 'Char counter';
  buildInitialInfo.results = [location, episode, character];

  return buildInitialInfo;
};

const buildEpisodes = (episodeWithLocations) => {
  buildInitialInfo.excercise_name = 'Episode locations';
  buildInitialInfo.results = episodeWithLocations;

  return buildInitialInfo;
};

module.exports = { buildCounter, buildEpisodes };
