import produce, { Draft } from 'immer'
import {
  WatchListActionType,
  EnumWatchListActionType,
  IWatchListState,
  IWatchItem,
} from './types'

const initialWatchListState: IWatchListState = {
  watchList: [],
}

export const watchListReducer = produce(
  (draft: Draft<IWatchListState>, action: WatchListActionType) => {
    switch (action.type) {
      case EnumWatchListActionType.FETCH_ITEMS:
        break
      case EnumWatchListActionType.SET_ITEM_DATA:
        draft.watchList = action.payload
        break
      case EnumWatchListActionType.DELETE_ITEM:
        const index = draft.watchList.findIndex((item) => item.id === action.payload)
        if (index !== -1) draft.watchList.splice(index, 1)
        break
      case EnumWatchListActionType.ADD_ITEM:
        const item: IWatchItem = {
          item: action.payload,
          complete: false,
          id: Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, ''),
        }
        draft.watchList.push(item)
        break
      case EnumWatchListActionType.COMPLETE_ITEM:
        draft.watchList.map((item) =>
          item.id === action.payload ? (item.complete = !item.complete) : item
        )
        break

      default:
        break
    }
  },
  initialWatchListState
)
