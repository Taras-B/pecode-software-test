import produce, { Draft } from 'immer'
import { EpisodesActionType, EnumEpisodesActionType, IEpisodesState } from './types'

const initialEpisodesState: IEpisodesState = {
  infoData: null,
  data: null,
}

export const episodesReducer = produce(
  (draft: Draft<IEpisodesState>, action: EpisodesActionType) => {
    switch (action.type) {
      case EnumEpisodesActionType.FETCH_EPISODES:
        break
      case EnumEpisodesActionType.SET_EPISODES_DATA:
        draft.data = action.payload
        break
      case EnumEpisodesActionType.SET_EPISODES_INFO:
        draft.infoData = action.payload
        break

      default:
        break
    }
  },
  initialEpisodesState
)
