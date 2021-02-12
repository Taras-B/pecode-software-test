import { combineReducers } from 'redux'
import { charactersReducer } from './characters/reducer'
import { ICharactersState } from './characters/types'

export const rootReducer = combineReducers({
  characters: charactersReducer,
})

export type RootState = {
  characters: ICharactersState
}
