require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const mock = require('../requests/mock/character');

class Notifier {
  static async getAllByEntity(entity) {
    if (process.env.NODE_ENV == 'test') {
      return mock.data;
    }

    const response = await fetch(`https://rickandmortyapi.com/api/${entity}`);
    return await response.json();
  }
}

module.exports = Notifier;
