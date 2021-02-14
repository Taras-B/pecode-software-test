import { Action } from 'redux'

export interface IWatchItem {
  complete: boolean
  item: string
  id: string
}

export interface IWatchListState {
  watchList: IWatchItem[]
}

export enum EnumWatchListActionType {
  FETCH_ITEMS = 'watch/FETCH_ITEMS',
  SET_ITEM_DATA = 'watch/SET_ITEM_DATA',
  ADD_ITEM = 'watch/ADD_ITEM',
  COMPLETE_ITEM = 'watch/COMPLETE_ITEM',
  DELETE_ITEM = 'watch/DELETE_ITEM',
}

export interface IFetchWatchListAction extends Action<EnumWatchListActionType> {
  type: EnumWatchListActionType.FETCH_ITEMS
}
export interface ISetWatchListDataAction extends Action<EnumWatchListActionType> {
  type: EnumWatchListActionType.SET_ITEM_DATA
  payload: IWatchItem[]
}
export interface IAddInWatchListAction extends Action<EnumWatchListActionType> {
  type: EnumWatchListActionType.ADD_ITEM
  payload: string
}
export interface IDeleteItemAction extends Action<EnumWatchListActionType> {
  type: EnumWatchListActionType.DELETE_ITEM
  payload: string
}
export interface ICompleteItemAction extends Action<EnumWatchListActionType> {
  type: EnumWatchListActionType.COMPLETE_ITEM
  payload: string
}

export type WatchListActionType =
  | IFetchWatchListAction
  | ISetWatchListDataAction
  | IAddInWatchListAction
  | IDeleteItemAction
  | ICompleteItemAction
