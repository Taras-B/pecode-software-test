import { ICharacterData, IInfoAndPagination } from '../types'
import {
  EnumCharactersActionType,
  IFetchCharactersAction,
  ISetCharactersDataAction,
  ISetCharactersInfoAction,
} from './types'

export const actionsCharacters = {
  fetch: (): IFetchCharactersAction => ({
    type: EnumCharactersActionType.FETCH_CHARACTERS,
  }),
  setData: (payload: ICharacterData[]): ISetCharactersDataAction => ({
    type: EnumCharactersActionType.SET_CHARACTERS_DATA,
    payload,
  }),
  setInfo: (payload: IInfoAndPagination): ISetCharactersInfoAction => ({
    type: EnumCharactersActionType.SET_CHARACTERS_INFO,
    payload,
  }),
}
