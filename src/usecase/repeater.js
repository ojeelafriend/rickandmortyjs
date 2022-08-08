const Notifier = require('../requests/Notifier');

const repeater = async ({ char, entity }) => {
  const { results } = await Notifier.getAllByEntity(entity);

  const charsArray = results
    .map((info) => info.name)
    .toString()
    .split('');

  const numberOfRepetitions = charsArray.filter(
    (element) => element == char.toLowerCase() || element == char.toUpperCase()
  );

  return numberOfRepetitions.length;
};

module.exports = repeater;
