import { Action } from 'redux'
import { ICharacterData, IInfoAndPagination } from '../rootTypes'

export interface ICharactersState {
  infoData: IInfoAndPagination | null
  data: ICharacterData[] | null
  currentPage: number
}

export enum EnumCharactersActionType {
  FETCH_CHARACTERS = 'characters/FETCH_CHARACTERS',
  SET_CHARACTERS_DATA = 'characters/SET_CHARACTERS_DATA',
  SET_CHARACTERS_INFO = 'characters/SET_CHARACTERS_INFO',
  FETCH_UPDATE_PAGE_CHARACTERS = 'characters/FETCH_UPDATE_PAGE_CHARACTERS',
  SET_LOADING = 'characters/SET_LOADING',
}

export interface IFetchCharactersAction extends Action<EnumCharactersActionType> {
  type: EnumCharactersActionType.FETCH_CHARACTERS
  payload: number
}
export interface ISetCharactersDataAction extends Action<EnumCharactersActionType> {
  type: EnumCharactersActionType.SET_CHARACTERS_DATA
  payload: Array<ICharacterData> | null
}
export interface ISetCharactersInfoAction extends Action<EnumCharactersActionType> {
  type: EnumCharactersActionType.SET_CHARACTERS_INFO
  payload: IInfoAndPagination | null
}

export type CharactersActionType =
  | IFetchCharactersAction
  | ISetCharactersDataAction
  | ISetCharactersInfoAction
