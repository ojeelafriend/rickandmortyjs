const { Notifier } = require('./Notifier');

const countChar = async ({ char, entity }) => {
  const { results } = await Notifier.getAllByEntity(entity);

  const charsArray = results
    .map((location) => location.name)
    .toString()
    .split('');

  const numberOfRepetitions = charsArray.filter(
    (element) => element == char.toLowerCase() || element == char.toUpperCase()
  );

  return numberOfRepetitions.length;
};

module.exports = countChar;
