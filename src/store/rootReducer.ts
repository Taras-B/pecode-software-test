import { combineReducers } from 'redux'
import { charactersReducer } from './characters/reducer'
import { episodesReducer } from './episodes/reducer'
import { locationReducer } from './locations/reducer'

import { ICharactersState } from './characters/types'
import { IEpisodesState } from './episodes/types'
import { ILocationsState } from './locations/types'

export const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  locations: locationReducer,
})

export type RootState = {
  characters: ICharactersState
  episodes: IEpisodesState
  locations: ILocationsState
}
