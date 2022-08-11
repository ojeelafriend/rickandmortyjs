const Notifier = require('../requests/Notifier');

const linker = async () => {
  const { results } = await Notifier.getAllEpisodes();

  const episodes = [];

  for (const key in results) {
    const { characters: urls, episode, name } = results[key];

    let ids = extractIds(urls);

    const characters = await Notifier.getCharacterById(ids);

    let duplicatedLocations = characters.map(({ origin }) => origin.name);

    const locations = deleteDuplicate(duplicatedLocations);

    episodes.push({ name, episode, locations });
  }

  return episodes;
};

function extractIds(urls = ['']) {
  return [urls.map((link) => link.split('/').filter((element) => /[0-9]/.test(element))).toString()];
}

function deleteDuplicate(duplicated = ['']) {
  return duplicated.filter((location, index) => duplicated.indexOf(location) == index);
}

module.exports = linker;
