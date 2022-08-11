const { dispatchCounter, dispatchEpisode } = require('../dispatcher');

const { app } = require('./http/express');

app.get('/', async (request, response) => {
  const counter = await dispatchCounter();
  const episodes = await dispatchEpisode();

  response.json(counter, episodes);
});

app.get('/counter', async (request, response) => {
  const counter = await dispatchCounter();

  response.json(counter).status(200);
});

app.get('/episodes', async (request, response) => {
  const episodes = await dispatchEpisode();

  response.json(episodes).status(200);
});

app.listen(3000, () => {
  console.log('Server is ready');
});
