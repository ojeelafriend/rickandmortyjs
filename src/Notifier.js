/*getAllLocations */
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

export class Notifier {
  static async getAllByEntity(entity) {
    const response = await fetch(`https://rickandmortyapi.com/api/${entity}`);
    return await response.json();
  }
}
