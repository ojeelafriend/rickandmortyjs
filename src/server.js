const { dispatchCounter } = require('./dispatcher');

(async () => {
  const counter = await dispatchCounter();
  console.log(counter);
})();
