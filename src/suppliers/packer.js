const buildInitialInfo = {
  exercise_name: '',
  time: 0,
  in_time: false,
  results: undefined,
};

/*
  Partiendo de un skeleton (buildInitialInfo) se setearán
  los nombres de los retos y devolverá el cuerpo completo
  con la información que gestionan los casos de uso.
*/

const buildCounter = (location, episode, character) => {
  buildInitialInfo.exercise_name = 'Char counter';
  buildInitialInfo.results = [location, episode, character];

  return buildInitialInfo;
};

const buildEpisodes = (episodeWithLocations) => {
  buildInitialInfo.exercise_name = 'Episode locations';
  buildInitialInfo.results = episodeWithLocations;

  return buildInitialInfo;
};

module.exports = { buildCounter, buildEpisodes };
