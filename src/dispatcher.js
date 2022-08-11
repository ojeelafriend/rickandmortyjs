
const linker = require('./usecase/linker');
const skeleton = require('./suppliers/counter');
const { buildCounter, buildEpisodes } = require('./suppliers/packer');

/*
  dispatcher es responsable de enviar la información
  totalmente estructurada como se pide en cada reto.
  Componiendo los objetos y midiendo cuánto tiempo
  se demora este proceso, entre los casos de uso, notifier y el packer.
*/


async function dispatchCounter() {
  let start = Date.now();
  const location = await skeleton({ char: 'l', entity: 'location' });
  const episode = await skeleton({ char: 'e', entity: 'episode' });
  const character = await skeleton({ char: 'c', entity: 'character' });


  let wrapper = buildCounter(location, episode, character);

  let end = Date.now();

  wrapper.time = `${end - start}ms`;
  wrapper.in_time = end - start < 3000;


  return [wrapper];
}

async function dispatchEpisode() {
  let start = Date.now();
  let wrapper = buildEpisodes(await linker());

  let end = Date.now();

  wrapper.time = `${end - start}ms`;
  wrapper.in_time = end - start < 3000;


  return [wrapper];


module.exports = { dispatchCounter, dispatchEpisode };
