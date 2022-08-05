const skeleton = require('./suppliers/counter');
const packer = require('./suppliers/packer');

async function dispatchCounter() {
  let start = Date.now();
  const location = await skeleton({ char: 'l', entity: 'location' });
  const episode = await skeleton({ char: 'e', entity: 'episode' });
  const character = await skeleton({ char: 'c', entity: 'character' });

  let wrapper = packer.buildCounter(location, episode, character);
  let end = Date.now();

  wrapper.time = `${end - start}ms`;
  wrapper.in_time = end - start < 3000;

  return wrapper;
}

module.exports = { dispatchCounter };
