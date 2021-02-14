import { ICharacterData, IInfoAndPagination } from '../store/rootTypes'

const BASE_URL = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
}

export const rickAndMortyAPI = {
  getCharacters(page: number = 1): Promise<IInfoAndPagination | ICharacterData> {
    return fetch(`${BASE_URL.characters}/?page=${page}`)
      .then((res) => res.json())
      .catch((e) => console.log(e))
  },
  getLocations(page: number) {
    return fetch(`${BASE_URL.locations}/?page=${page}`)
      .then((res) => res.json())
      .catch((e) => console.log(e))
  },
  getEpisodes(page: number) {
    return fetch(`${BASE_URL.episodes}/?page=${page}`)
      .then((res) => res.json())
      .catch((e) => console.log(e))
  },
}
