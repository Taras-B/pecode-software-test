import produce, { Draft } from 'immer'
import { CharactersActionType, EnumCharactersActionType, ICharactersState } from './types'

const initialCharactersState: ICharactersState = {
  infoData: null,
  data: null,
  currentPage: 1,
}

export const charactersReducer = produce(
  (draft: Draft<ICharactersState>, action: CharactersActionType) => {
    switch (action.type) {
      case EnumCharactersActionType.FETCH_CHARACTERS:
        draft.data = []
        break
      case EnumCharactersActionType.SET_CHARACTERS_DATA:
        draft.data = action.payload
        break
      case EnumCharactersActionType.SET_CHARACTERS_INFO:
        draft.infoData = action.payload
        break

      default:
        break
    }
  },
  initialCharactersState
)
