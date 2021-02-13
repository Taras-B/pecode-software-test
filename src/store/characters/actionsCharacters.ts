import { ICharacterData, IInfoAndPagination } from '../types'
import {
  EnumCharactersActionType,
  IFetchCharactersAction,
  ISetCharactersDataAction,
  ISetCharactersInfoAction,
} from './types'

export const actionsCharacters = {
  fetch: (payload: number): IFetchCharactersAction => ({
    type: EnumCharactersActionType.FETCH_CHARACTERS,
    payload,
  }),
  setData: (payload: ICharacterData[] | null): ISetCharactersDataAction => ({
    type: EnumCharactersActionType.SET_CHARACTERS_DATA,
    payload,
  }),
  setInfo: (payload: IInfoAndPagination | null): ISetCharactersInfoAction => ({
    type: EnumCharactersActionType.SET_CHARACTERS_INFO,
    payload,
  }),
}
