import { combineReducers } from 'redux'
import { charactersReducer } from './characters/reducer'
import { ICharactersState } from './characters/types'
import { episodesReducer } from './episodes/reducer'
import { IEpisodesState } from './episodes/types'

export const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
})

export type RootState = {
  characters: ICharactersState
  episodes: IEpisodesState
}
