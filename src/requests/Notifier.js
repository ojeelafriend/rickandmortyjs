require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const allEpisodesMock = require('./mock/allEpisodes');
const characterByIdMock = require('./mock/characterById');
const characterMock = require('./mock/character');

class Notifier {
  static async getAllByEntity(entity) {
    if (this.checkStage()) {
      return characterMock.data;
    }

    const response = await fetch(`https://rickandmortyapi.com/api/${entity}`);
    return await response.json();
  }

  static async getAllEpisodes() {
    if (this.checkStage()) {
      return allEpisodesMock.data;
    }

    const response = await fetch(`https://rickandmortyapi.com/api/episode`);
    return await response.json();
  }

  static async getCharacterById(ids = []) {
    if (this.checkStage()) {
      return characterByIdMock.data;
    }

    const response = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
    return await response.json();
  }

  static checkStage() {
    if (process.env.NODE_ENV == 'test') return true;
  }
}

module.exports = Notifier;
