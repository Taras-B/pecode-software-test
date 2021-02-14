import { IEpisodeData, IInfoAndPagination } from '../rootTypes'
import {
  EnumEpisodesActionType,
  IFetchEpisodesAction,
  ISetEpisodesDataAction,
  ISetEpisodesInfoAction,
} from './types'

export const actionsEpisode = {
  fetch: (payload: number): IFetchEpisodesAction => ({
    type: EnumEpisodesActionType.FETCH_EPISODES,
    payload,
  }),
  setData: (payload: IEpisodeData[] | null): ISetEpisodesDataAction => ({
    type: EnumEpisodesActionType.SET_EPISODES_DATA,
    payload,
  }),
  setInfo: (payload: IInfoAndPagination | null): ISetEpisodesInfoAction => ({
    type: EnumEpisodesActionType.SET_EPISODES_INFO,
    payload,
  }),
}
