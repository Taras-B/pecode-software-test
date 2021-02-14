export interface IInfoAndPagination {
  count: number
  pages: number
  next: null | string
  prev: null | string
}

interface ICommonData {
  id: number
  name: string
  url: string
  created: string
}
export interface ICharacterData extends ICommonData {
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
}

export interface ILocationData extends ICommonData {
  type: string
  dimension: string
  residents: string[]
}

export interface IEpisodeData extends ICommonData {
  air_date: string
  episode: string
  characters: string[]
}

export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}
