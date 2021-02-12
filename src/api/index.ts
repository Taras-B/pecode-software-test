import { ICharacterData, IInfoAndPagination } from '../store/types'

const BASE_URL = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
}

export const rickAndMortyAPI = {
  getCharacters(): Promise<IInfoAndPagination | ICharacterData> {
    return fetch(BASE_URL.characters)
      .then((res) => res.json())
      .catch((e) => console.log(e))
  },
  getLocations() {
    return fetch(BASE_URL.locations)
      .then((res) => res.json())
      .catch((e) => console.log(e))
  },
  getEpisodes() {
    return fetch(BASE_URL.episodes)
      .then((res) => res.json())
      .catch((e) => console.log(e))
  },
}
