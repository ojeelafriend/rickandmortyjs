const { dispatchCounter, dispatchEpisode } = require('./dispatcher');

(async () => {
  console.log(await dispatchCounter());

  console.log(`   `);

  console.log(await dispatchEpisode());
})();
