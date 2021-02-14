import {
  EnumWatchListActionType,
  IFetchWatchListAction,
  ISetWatchListDataAction,
  IAddInWatchListAction,
  IWatchItem,
  IDeleteItemAction,
  ICompleteItemAction,
} from './types'

export const actionsWatchList = {
  fetch: (): IFetchWatchListAction => ({
    type: EnumWatchListActionType.FETCH_ITEMS,
  }),
  setData: (payload: IWatchItem[]): ISetWatchListDataAction => ({
    type: EnumWatchListActionType.SET_ITEM_DATA,
    payload,
  }),
  addItem: (payload: string): IAddInWatchListAction => ({
    type: EnumWatchListActionType.ADD_ITEM,
    payload,
  }),
  deleteItem: (payload: string): IDeleteItemAction => ({
    type: EnumWatchListActionType.DELETE_ITEM,
    payload,
  }),
  completeItem: (payload: string): ICompleteItemAction => ({
    type: EnumWatchListActionType.COMPLETE_ITEM,
    payload,
  }),
}
